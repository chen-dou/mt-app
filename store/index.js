import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = () => new Vuex.Store({
   state: {
    currentCity: '大丰城'
  },
  mutations: {
    setCity (state,currentCity) {
        state.currentCity = currentCity
    }
  },
  actions:{
    async nuxtServerInit({commit}){
        console.log('nuxtServerInit')
        let {data:{currentCity}} = await axios.get("http://localhost:3000/mock/city.json")
        commit("setCity",currentCity)    
    }
  }
})

export default store