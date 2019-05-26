import Taro from '@tarojs/taro';

type RequestOptions = {
  url: string,
  data?: {
    [propsName: string]: any
  },
  header?: {
    [propsName: string]: string
  },
  method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
}

type resolve_promise = any;

type reject_promise = any;

export default function requestAgent(options: RequestOptions) {
  return new Promise((resolve:resolve_promise, reject:reject_promise) => {
    Taro.request({
      method: options.method,
      url: options.url,
      data: options.data,
      header: options.header,
      dataType: 'json'
    }).then((data) => {
      debugger
      if (data.statusCode === 403 || data.statusCode === 401) {
        return
      } else if (data.statusCode !== 200){
        reject(data.data)
      }else if (data && data.data) {
        if (data.data.errno === 0) {
          resolve( data.data.data );
        }
        else {
          reject(new Error(data.data.errmsg))
        }
      } else {
        reject(new Error('网络超时'))
      }

    }).catch((err) => {
      debugger
      reject(new Error(err.errMsg || err ));
    });
  });

}

