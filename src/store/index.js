import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inCartGames: []
  },
  getters: {
    inCartGames: (state) => {
      return state.inCartGames
    }
  },
  mutations: {
    inCartGames(state, inCartGames) {
      state.inCartGames.push(inCartGames);
    }
  },
  actions: {
    inCartGames(context, inCartGames) {
      context.commit('inCartGames', inCartGames);
    }
  }
})
