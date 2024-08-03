import request from '@/utils/request';

const user = {
  login: (data: any) => {
    return request('/api/user/login', {
      method: 'POST',
      data,
    });
  },
  queryPage: (data: any) => {
    return request('/api/user/queryPage', {
      method: 'POST',
      data,
    });
  },
};

export { user };
