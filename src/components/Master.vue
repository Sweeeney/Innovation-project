<template>
  <v-content>
    <header>
      <div v-if="user.loggedIn">
        <v-row>
          <v-col class="text-left">
            <h2 class="display-1 font-weight-thin pl-4 ma-2" style="text-center">
              <router-link class="back" to="/home">
                <v-icon>mdi-chevron-left</v-icon>
              </router-link>
              MON CALENDRIER
            </h2>
          </v-col>
          <v-col class="text-right">
            <v-btn tile large class="ma-2" color="teal lighten-4" @click.prevent="signOut">Déconnexion</v-btn>
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row>
          <v-col class="text-right">
            <v-btn tile large class="ma-2" color="teal lighten-4" to="/signin">Connexion</v-btn>
            <v-btn tile large class="ma-2" color="teal lighten-4" to="/signup">Inscription</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <h2
            class="ps-4 ma-2 font-weight-thin headline"
          >POUR ACCEDER A CETTE FONCTIONNALITE, CONNECTE-TOI OU REJOINS-NOUS !</h2>
        </v-row>
        <v-row align="center" justify="center">
          <v-card flat width="40%" class="mx-auto">
            <v-card d-flex flat width="35%" class="mx-auto">
              <v-img
                src="https://i.pinimg.com/564x/74/46/62/74466206a9604abb18e5a07ab7be6cce.jpg"
                alt="detailsJour"
                width="75%"
              ></v-img>
            </v-card>
          </v-card>
        </v-row>
      </div>
    </header>

    <div v-if="user.loggedIn">
      <v-tabs v-model="type" align-with-title>
        <v-tab v-for="item in items" :key="item.tab" :href="'#' + item.content">{{ item.tab }}</v-tab>
        <v-tabs-slider color="teal darken-2"></v-tabs-slider>
        <v-tab-item v-for="item in items" :key="item.content" :value="'' + item.content">
          <v-content>
            <v-row justify="space-around">
              <v-date-picker
                v-model="date"
                full-width
                :landscape="$vuetify.breakpoint.smAndUp"
                :type="type"
                class="mt-4"
                locale="france"
                header-color="teal lighten-2"
                color="teal darken-1"
                :max="dateMax"
              ></v-date-picker>
            </v-row>
          </v-content>
        </v-tab-item>
      </v-tabs>
      <div class="my-3 text-center">
        <v-btn class="ma-2" v-on:click="access" v-if="type=='date'">
          <router-link :to="{name:'detailsJour', params:{date:date}}">
            Accéder
            <v-icon right>mdi-chevron-right</v-icon>
          </router-link>
        </v-btn>
        <v-btn class="ma-2" v-on:click="access" v-if="type=='month'">
          <router-link :to="{name:'detailsMois', params:{date:date}}">
            Accéder
            <v-icon right>mdi-chevron-right</v-icon>
          </router-link>
        </v-btn>
      </div>
    </div>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Master",
  data() {
    return {
      tab: null,
      items: [
        { tab: "Vue annuelle", content: "month" },
        { tab: "Vue mensuelle", content: "date" }
      ],
      date: new Date().toISOString().substr(0, 7),
      type: "month",
      types: ["month", "date"],
      pickerDate: null,
      dateMax: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "master"
          });
        });
    }
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>