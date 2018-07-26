/*
 * @Author: Gavin
 * @Date: 2018-07-26 11:04:16
 * @Last Modified by: Gavin
 * @Last Modified time: 2018-07-26 11:04:36
 * @Describe: 头部请求加入token
 */
import http from './http';

const post = (data) => {
  const info = JSON.parse(localStorage.getItem('info'));
  data.method = 'POST';
  data.headers = {
    'x-access-token': info.token,
    'secret': info.secret
  };
  return http(data);
};

export default post;
