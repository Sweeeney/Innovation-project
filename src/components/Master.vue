<template>
    <v-content>
        <div class="pl-4 ma-2" v-if="user.loggedIn"> 
            <v-row>
                <v-col class="text-left">
                    <h2 class="display-1 font-weight-thin"> MON CALENDRIER </h2>
                </v-col>
                <v-col class="text-right">
                    <v-btn tile large class="ma-2" color="teal lighten-4" @click.prevent="signOut">Déconnexion</v-btn>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-tabs
                v-model="type"
                align-with-title
            >
                <v-tab
                    v-for="item in items"
                    :key="item.tab"
                    :href="'#' + item.content"
                >
                    {{ item.tab }}
                </v-tab>
                <v-tabs-slider color="teal darken-2"></v-tabs-slider>
                    <v-tab-item
                        v-for="item in items"
                        :key="item.content"
                        :value="'' + item.content"
                    >
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
                      Accéder <v-icon right>mdi-chevron-right</v-icon> 
                    </router-link>
                </v-btn>
                <v-btn class="ma-2" v-on:click="access" v-if="type=='month'">
                    <router-link :to="{name:'detailsMois', params:{date:date}}"> 
                      Accéder <v-icon right>mdi-chevron-right</v-icon> 
                    </router-link>
                </v-btn>
                <v-btn class="ma-2">
                    <router-link class="back" to="/home">Retour</router-link>
                </v-btn>
            </div>
        </div>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import {firestore} from '../main';

export default {
    name:'Master',
    data () {
      return {
        tab: null,
        items: [
          { tab: 'Vue annuelle', content: 'month' },
          { tab: 'Vue mensuelle', content: 'date' },
        ],
        date: new Date().toISOString().substr(0, 7),
        type:'month',
        types: ['month', 'date'],
        pickerDate: null,
        collection: [],
        dateMax : new Date().toISOString().substr(0, 10),
      }
    },
    firestore() {
      return {
        collection: firestore.collection('test'),
      }
    },
    methods: {
      signOut() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({
              name: "home"
            });
          });
      },
    },
    computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
    }
  }
</script>