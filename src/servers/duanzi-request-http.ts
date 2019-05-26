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
      
     if (data.statusCode !== 200){
        reject(data.data)
      }else if (data.statusCode === 200 && data && data.data ) {
        resolve( data.data );
      } else {
        reject(new Error('网络超时'))
      }

    }).catch((err) => {
      debugger
      reject(new Error(err.errMsg || err ));
    });
  });

}

