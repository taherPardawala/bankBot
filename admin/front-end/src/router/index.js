import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Application from '@/components/Application'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Application,
      children: [
        {
          path: 'hello',
          name: 'HelloWorld',
          component: HelloWorld,
        }    
      ]
    }
  ]
})
