import { nei_han_duan_zi } from './url-config';

import requstHttp from './duanzi-request-http';

export default {
  getWordList: ({ payload}) => {
    return requstHttp({
      url: `${nei_han_duan_zi.word}`,
      method: 'GET',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        ...payload,
      },
    })
      .then((data) => {
        return data;
      });
  },
  
}

