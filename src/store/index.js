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
    },
    removeGame(state, indexRemoveGame){
      state.inCartGames.splice(indexRemoveGame, 1)
    }
  },
  actions: {
    inCartGames(context, inCartGames) {
      context.commit('inCartGames', inCartGames);
    },
    removeGame(context, indexRemoveGame){
      context.commit('removeGame', indexRemoveGame)
    }
  }
})
