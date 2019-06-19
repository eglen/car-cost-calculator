import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    capitalCosts: []
  },
  mutations: {
    UPDATE_SERIES(state, series) {
      Vue.set(state, 'capitalCosts', [...series]);
    }
  },
  actions: {
    updateSeries(context, series) {
      context.commit("UPDATE_SERIES", series);
    }
  },
  getters: {
    getCapitalCosts(state) {
      return state.capitalCosts;
    }
  }
});
