import { user } from './url-config';
import requstHttp from './request-http';

export default {
  requestLogin: ({ payload}, account) => {
    return requstHttp({
      url: `${user.login}`,
      method: 'POST',
      header: {
        Authorization: account.token || '',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        code: payload.code
      },
    })
      .then((data) => {
        return data;
      });
  },
}

