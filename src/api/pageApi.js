import post from '@/utils/authPost';

// 获取页面信息
export const getPageConfig = () => {
  return post({
    url: '/api/v1/p/page'
  });
};
