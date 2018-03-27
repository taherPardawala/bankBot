// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './vuex'

Vue.use(Vuetify, {
  theme: {
    // primary: colors.red.darken1, // #E53935
    // secondary: colors.red.lighten4, // #FFCDD2
    // accent: colors.indigo.base // #3F51B5
   primary:'#0fb8ad',
   secondary:'#2cb5e8',
   midpointary: '#1EB7CB',
   tertiary: '#FF5722',
   yes:'#8BC34A',
   nope: '#FF1744'
  }
})

import('../node_modules/vuetify/dist/vuetify.min.css') // Ensure you are using css-loader

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

/*
Commented out vue material code;
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial) //Required to boot vue material
Vue.material.registerTheme('default', {
    primary: 'yellow',
    accent: 'cyan',
    warn: 'light-blue',
    background: 'white',
  })
*/
