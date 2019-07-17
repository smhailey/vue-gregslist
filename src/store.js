import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

let api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api'
})

export default new Vuex.Store({
  state: {
    cars: [],
    jobs: [],
    houses: []
  },
  mutations: {
    setCars(state, data) {
      state.cars = data
    }
  },
  actions: {
    async getCars({ dispatch, commit }) {
      try {
        let res = await api.get('cars')
        // console.log(res.data.data)
        commit('setCars', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addCar({ dispatch, commit }, payload) {
      try {
        let res = await api.post('cars/', payload)
        dispatch("getCars")
      } catch (error) {
        console.log(error)
      }
    }
  }
})
