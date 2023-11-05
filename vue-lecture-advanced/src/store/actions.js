import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchCommentInfo
} from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    return fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_JOBS(context) {
    return fetchJobsList()
      .then(response => {
        context.commit('SET_JOBS', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ASK(context) {
    return fetchAskList()
      .then(response => {
        context.commit('SET_ASK', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentInfo(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(response => {
        commit('SET_LIST', response.data);
        return response
      })
      .catch(error => {
        console.log(error);
      });
  }
};
