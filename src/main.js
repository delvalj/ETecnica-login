import Vue from 'vue'
import App from './App.vue'

// import { createStore } from 'vuex'

// const store = createStore();

// App.use(store)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
