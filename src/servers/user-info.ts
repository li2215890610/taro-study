import { user } from './url-config';

import requstHttp from './public-request-http';

export default {
  getUserInfoRequest: ({ payload}, account) => {
    return requstHttp({
      url: `${user.login}`,
      method: 'POST',
      header: {
        Authorization: account.token || '',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        ...payload,
        ...account
      },
    })
      .then((data) => {
        return data;
      });
  },
  setUpdateUserInfoRequest: ({ payload}, account) => {
    return requstHttp({
      url: `${user.login}`,
      method: 'POST',
      header: {
        Authorization: account.token || '',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        ...payload,
        ...account
      },
    })
      .then((data) => {
        return data;
      });
  },
}

