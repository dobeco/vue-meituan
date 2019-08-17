import Vue from 'vue'
import Vuex from 'vuex'
import geo from './models/geo'
Vue.use(Vuex)

const store = ()=> new Vuex.Store({
  modules: {
    geo
  },
  actions: {
    async nuxtServerInit({commit}, {req,app}) {
      const {status, data:{province, city}} = await this.$axios.get('/geo/getPosition')
      console.log(province, city)
      // 获取城市
      commit('geo/setPosition',status===200?{city,province}:{city:'',province:''})

    }
  }
})

export default store
