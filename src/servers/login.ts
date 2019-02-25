import { user } from './url-config';

import requstAgent from './request-http';

export default {
  requestLogin: (payload, account) => {
    return requstAgent({
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
  }
}

