import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    userInfo: {
    },
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setUserInfo (state, userInfo) {
        state.userInfo = userInfo;
        uni.setStorageSync('userInfo', userInfo);
    },
    clearUserInfo (state) {
        state.userInfo = {};
        uni.removeStorageSync('userInfo');
    }
  },
  getters: {
      hasLogin: state => {
          return Object.keys(state.userInfo).length > 0
      }
  }
})

export default store;