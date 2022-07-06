import axiosClient from './axiosClient';

const userApi = {
  checkPhone(data) {
    const url = `/api/auth/v1/checkPhone?phone=${data.phone}`;
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = '/api/auth/v1/login';
    return axiosClient.post(url, data);
  },
};

export default userApi;
