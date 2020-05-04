import Vue from 'vue';
import App from './App.vue';
import VueFirestore from 'vue-firestore';

import vuetify from './plugins/vuetify';
import router from './routes/index';
import * as firebase from 'firebase';
import store from './store';

require ('firebase/firestore');
Vue.use(VueFirestore);

Vue.config.productionTip = false;

//TEST//
const firebaseConfig = {
  apiKey: "AIzaSyC0YkkVlVTCcB4aPrjoaltwFv9mEjPVya4",
  authDomain: "innovation-820.firebaseapp.com",
  databaseURL: "https://innovation-820.firebaseio.com",
  projectId: "innovation-820",
  storageBucket: "innovation-820.appspot.com",
  messagingSenderId: "667673205028",
  appId: "1:667673205028:web:4d8b8f872ecbf83aedfbb1",
  measurementId: "G-EVFSNVFCG2"
};

const initialisation = firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

export const firestore = initialisation.firestore();

//FIN TEST//

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
