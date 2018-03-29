import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersist from 'vuex-persist';
Vue.use(Vuex);

let vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

let actions = {
  clearAuth({commit}){
    commit('logout');
  },
  destroySession({commit}){
    commit('endSession');
  }
};
let mutations = {
  auth(state, payload) {
    state.auth = payload;
  },
  accountType(state,payload){
    state.accountType = payload;
  },
  logout(state, payload) {
    console.log("AUTH VUEX");
    state.auth = null;
  }
};
let getters = {
  auth: state => state.auth,
  accountType: state => state.accountType,
};

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  actions,
  mutations,
  getters,
  state: {
    auth: {},
  accountType:''
  },
  modules: {

  },
  strict: false,
});
