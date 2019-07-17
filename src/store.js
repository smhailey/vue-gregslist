import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'bcw-sandbox.herokuapp.com/api'
})

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
