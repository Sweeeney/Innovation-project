import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './routes';
// import * as firebase from 'firebase';
// import store from './store';

//import VueFirestore from 'vue-firestore';

// firebase.auth().onAuthStateChanged(user => {
//   store.dispatch("fetchUser", user);
// });

Vue.config.productionTip = false

//Vue.use(VueFirestore);

new Vue({
  router,
  //store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
