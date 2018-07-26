import * as pageApi from '@/api/pageApi';

// 获取页面配置信息
export const loadPageConfig = ({ commit }) => {
  pageApi.getPageConfig().then(res => {
    console.log(res.result);
    commit('SET_PAGE_INFO', res.result);
  });
};
