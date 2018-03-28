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
import CarLoan from '@/components/loan/CarLoan'
import HomeLoan from '@/components/loan/HomeLoan'
import PersonalLoan from '@/components/loan/PersonalLoan'
import UsedCarLoan from '@/components/loan/UsedCarLoan'
import CreditCard from '@/components/card/CreditCard'
import NewAccount from '@/components/create-account/NewAccount'
import Career from '@/components/Career'


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
        },
        {
          path: '/app/carloan',
          name: 'CarLoan',
          component: CarLoan,
        },    
        {
          path: '/app/homeloan',
          name: 'HomeLoan',
          component: HomeLoan,
        },    
        {
          path: '/app/personalloan',
          name: 'PersonalLoan',
          component: PersonalLoan,
        },    
        {
          path: '/app/usedcarloan',
          name: 'UsedCarLoan',
          component: UsedCarLoan,
        },    
        {
          path: '/app/creditcard',
          name: 'CreditCard',
          component: CreditCard,
        },    
        {
          path: '/app/createaccount',
          name: 'NewAccount',
          component: NewAccount,
        },    
        {
          path: '/app/careers',
          name: 'Career',
          component: Career,
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
