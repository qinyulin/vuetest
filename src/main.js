// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import pageOne from './components/pageOne'
import pageTwo from './components/pageTwo'
import pageThree from './components/pageThree'
import pageFour from './components/pageFour'
import erjiOne from './components/erji/erji_One'
import erjiTwo from './components/erji/erji_Two'
import erjiThree from './components/erji/erji_Three'
import {store} from './store/store'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)
axios.defaults.baseURL = "http://localhost/shuju/data.php"
Vue.prototype.http = axios

Vue.config.productionTip = false

const routes = [
	{path:'/pageOne',component:pageOne,name:'pageOne'},
	{path:'/pageTwo',component:pageTwo,name:'pageTwo',children:[
    {path:'/pageTwo/erjiOne',component:erjiOne,name:'erjiOne'},
    {path:'/pageTwo/erjiTwo',component:erjiTwo,name:'erjiTwo'},
    {path:'/pageTwo/erjiThree',component:erjiThree,name:'erjiThree'},
  ]},
	{path:'/pageThree',component:pageThree,name:'pageThree'},
	{path:'/pageFour',component:pageFour,name:'pageFour'},
]

const router = new VueRouter({
	routes,
  mode:'history',
  linkActiveClass:'active'
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
