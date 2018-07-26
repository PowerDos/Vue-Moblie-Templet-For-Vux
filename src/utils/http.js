import axios from 'axios';

const http = axios.create({
  timeout: 5000
});

http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, (error) => {
  // 对响应错误做点什么
  console.log(error.response.status);
  return Promise.reject(error);
});

export default http;
