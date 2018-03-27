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
  sessionId(state, payload) {
    state.session.id = payload;
  },
  sessionEmail(state, payload) {
    state.session.email = payload;
  },
  endSession(state, payload) {
    console.log("Session Destroyed");
    state.session = null
  },
  logout(state, payload) {
    console.log("AUTH VUEX");
    state.auth = null;
  }
};
let getters = {
  auth: state => state.auth,
  accountType: state => state.accountType,
  session: state => state.session,
  sessionId: state => state.session.id,
  sessionEmail: state => state.session.email,
};

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  actions,
  mutations,
  getters,
  state: {
    auth: {},
    session: {
      email: "",
      id: ""
  },
  accountType:''
  },
  modules: {

  },
  strict: true,
});
