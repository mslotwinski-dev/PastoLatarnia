import { createStore } from 'vuex'

export default createStore({
  state: {
    appLanguage:
      localStorage.getItem('language') ||
      process.env.VUE_APP_I18N_LOCALE ||
      'en',
  },
  getters: {
    getAppLanguage: (state) => state.appLanguage,
  },
  mutations: {
    setAppLanguage(state, language: string) {
      state.appLanguage = language
      localStorage.setItem('language', language) // Whenever we change the appLanguage we save it to the localStorage
    },
  },
  actions: {},
  modules: {},
})
