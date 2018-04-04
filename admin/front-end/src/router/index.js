import Vue from 'vue'
import Router from 'vue-router'
// Common Files
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import FAQs from '@/components/FAQs'
import PageNotFound from '@/components/404'
// User Files
import Application from '@/components/Application'
import HelloWorld from '@/components/user/HelloWorld'
import LifeInsurance from '@/components/user/insurance/LifeInsurance'
import HealthInsurance from '@/components/user/insurance/HealthInsurance'
import TwoWheelerInsurance from '@/components/user/insurance/TwoWheelerInsurance'
import CarInsurance from '@/components/user/insurance/CarInsurance'
import CarLoan from '@/components/user/loan/CarLoan'
import HomeLoan from '@/components/user/loan/HomeLoan'
import PersonalLoan from '@/components/user/loan/PersonalLoan'
import UsedCarLoan from '@/components/user/loan/UsedCarLoan'
import CreditCard from '@/components/user/card/CreditCard'
import CreateAccount from '@/components/user/create-account/CreateAccount'
import Career from '@/components/user/Career'
import News from '@/components/user/News'
import CreditScore from '@/components/CreditScore'
// Admin Files
import AdminApplication from '@/components/AdminApp'
import AdminCareers from '@/components/admin/career/Careers'
import AdminNewAccounts from '@/components/admin/account/NewAccounts'
import AdminAppointments from '@/components/admin/appointment/Appointments'

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
          name: 'CreateAccount',
          component: CreateAccount,
        },    
        {
          path: '/app/careers',
          name: 'Career',
          component: Career,
        },    
        {
          path: '/app/news',
          name: 'News',
          component: News,
        },    
        {
          path: '/app/creditscore',
          name: 'CreditScore',
          component: CreditScore,
        }    
      ]
    },
    {
      path: '/admin',
      component: AdminApplication,
      children:[
        {
          path: '/admin/careers',
          name: 'AdminCareers',
          component: AdminCareers,
        },
        {
          path: '/admin/accounts',
          name: 'AdminNewAccounts',
          component: AdminNewAccounts,
        },
        {
          path: '/admin/appointments',
          name: 'HelloAdminAppointmentsWorld',
          component: AdminAppointments,
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
    },
    {
      path: '/faqs',
      name: 'FAQs',
      component: FAQs,
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
    }
  ]
})
