import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Application from '@/components/Application'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import LifeInsurance from '@/components/insurance/LifeInsurance'
import HealthInsurance from '@/components/insurance/HealthInsurance'
import TwoWheelerInsurance from '@/components/insurance/TwoWheelerInsurance'
import CarInsurance from '@/components/insurance/CarInsurance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Application,
      children: [
        {
          path: '/app/hello',
          name: 'HelloWorld',
          component: HelloWorld,
        },
        {
          path: '/app/lifeinsurance',
          name: 'LifeInsurance',
          component: LifeInsurance,
        },
        {
          path: '/app/healthinsurance',
          name: 'HealthInsurance',
          component: HealthInsurance,
        },
        {
          path: '/app/carinsurance',
          name: 'CarInsurance',
          component: CarInsurance,
        },
        {
          path: '/app/twowheelerinsurance',
          name: 'TwoWheelerInsurance',
          component: TwoWheelerInsurance,
        }    
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    }
  ]
})
