import request from '@/utils/request';

const user = {
  login: (data: any) => {
    return request('/api/user/login', {
      method: 'POST',
      data,
    });
  },
};

export { user };
