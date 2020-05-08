<template>
  <v-content>
    <header>
      <div v-if="user.loggedIn">
        <v-row>
          <v-col class="text-left">
            <h2 class="ps-4 ma-2 font-weight-thin headline">Bienvenue {{this.utilisateur.displayName}}</h2>
          </v-col>
          <v-col class="text-right">
            <v-btn
              tile
              large
              class="ma-2"
              color="teal lighten-4"
              @click.prevent="signOut"
            >Déconnexion</v-btn>
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row align="right">
          <v-col class="text-right">
            <v-btn tile large class="ma-2" color="teal lighten-4" to="/signin">Connexion</v-btn>
            <v-btn tile large class="ma-2" color="teal lighten-4" to="/signup">Inscription</v-btn>
          </v-col>
        </v-row>
      </div>
    </header>

    <h2 class="display-1 font-weight-thin pl-4 ma-2">ACTUALITÉS</h2>

    <v-container fluid grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm8 md10 lg10>
          <v-card height="400">
            <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src"></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-flex>

        <v-flex xs12 sm5 md2 lg2>
          <v-card height="400">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="display-1">Nancy</v-list-item-title>
                <v-list-item-subtitle class="headline">Ensoleillé</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-text>
              <v-row align="center" justify="center">
                <v-col class="headline" cols="10" align="center">MIN - 9&deg;C</v-col>
                <v-col class="headline" cols="10" align="center">MAX - 23&deg;C</v-col>
                <v-col cols="10" align="center">
                  <v-img
                    src="https://image.flaticon.com/icons/svg/2698/2698194.svg"
                    alt="Sunny image"
                    width="50%"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <br />

    <v-divider width="80%" class="mx-auto"></v-divider>

    <br />

    <h2 class="ps-4 ma-2 font-weight-thin display-1">A PROPOS DE NOUS...</h2>

    <!-- A propos -->
    <v-container fluid grid-list-xl text-xs-center>
      <!-- A propos de nous -->
      <v-row class="mx-auto">
        <!-- Cynthia -->
        <v-col>
          <v-flex xs12>
            <v-card width="100%" class="mx-auto">
              <v-img
                src="https://i.pinimg.com/474x/e5/54/9e/e5549e9acf0f8a00af0338833f5b8e34.jpg"
                alt="Cynthia"
                contain
              ></v-img>
            </v-card>
            <div class="text-center">
              <v-dialog v-model="cynthia" width="500">
                <template v-slot:activator="{ on }">
                  <v-btn color="teal darken-2" dark v-on="on">En savoir plus sur Cynthia</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>A propos de Cynthia</v-card-title>
                  <v-card-text>
                    Bonjour, je m'appelle Cynthia. Enchantée. Je suis en première année de master sciences cognitives et j'aime manger.
                    Je ne bois pas beaucoup, parce que je suis un chameau. Bisous, bisous.
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </v-flex>
        </v-col>
        <!-- Amélie -->
        <v-col>
          <v-flex xs12>
            <v-card width="100%" class="mx-auto align-center">
              <v-img
                src="https://i.pinimg.com/474x/1b/0a/0d/1b0a0d21e9740dfd470b061b8f326e54.jpg"
                alt="Amelie"
                contain
              ></v-img>
            </v-card>
            <div class="text-center">
              <v-dialog v-model="amelie" width="500">
                <template v-slot:activator="{ on }">
                  <v-btn color="teal darken-2" dark v-on="on">En savoir plus sur Amélie</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>A propos d'Amélie</v-card-title>

                  <v-card-text>
                    Bonjour à toi, jeune padawan. Rejoins le côté obscur et mets-toi dans un pouf, comme moi. C'est trop génial. Ah ! Je suis également en 
                    première année de master sciences cognitives, comme Cynthia. A bientôt ! 
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </v-flex>
        </v-col>
        <!-- Clara -->
        <v-col>
          <v-flex xs12>
            <v-card width="100%" class="mx-auto">
              <v-img
                src="https://i.pinimg.com/474x/85/26/96/852696fddd08bf5c30676e4f0a7fbc0e.jpg"
                alt="Clara"
                contain
              ></v-img>
            </v-card>
            <div class="text-center">
              <v-dialog v-model="clara" width="500">
                <template v-slot:activator="{ on }">
                  <v-btn color="teal darken-2" dark v-on="on">En savoir plus sur Clara</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>A propos de Clara</v-card-title>

                  <v-card-text>
                    Bonjour, je suis Clara, je suis dans le même master que mes amies et il en faut peu pour me rendre heureuse. Bisous, bisous, cordialement. 
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </v-flex>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {
      utilisateur:firebase.auth().currentUser,

      slides: [
        {
          src:
            "https://lh3.googleusercontent.com/proxy/5kTuJhtekBEF8mi-N9h9gs5xLyQ3VNmr6DBn6SFFdRvIXRgYa2tmrB4owhX-1_p84FJJWCyEyXCoeq_7r6VL68e8cPEIX42lHlDHgW4u1OErX6nQtYd7avqfaxrPV3bAGKVSMQ-y6l8U_5yVPHta"
        },
        {
          src:
            "https://www.journalexpress.ca/wp-content/uploads/sites/6/2019/08/Fruit-l%C3%A9gume-1600x1068.jpg"
        },
        {
          src:
            "https://labellegang.s3.amazonaws.com/images/meditation-pleine-conscience_960_540.jpg"
        },
        {
          src:
            "https://resize-europe1.lanmedia.fr/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/developpement-personnel/sante-alimentation-bien-etre-cinq-livres-inspirants-pour-decouvrir-le-developpement-personnel-3613973/47451383-1-fre-FR/Sante-alimentation-bien-etre-cinq-livres-inspirants-pour-decouvrir-le-developpement-personnel.jpg"
        },
        {
          src:
            "https://static.vix.com/es/sites/default/files/styles/large/public/imj/otramedicina/P/Propiedades-del-masaje-con-piedras-calientes.jpg"
        }
      ],
      ressentis: [
        "Heureux",
        "Triste",
        "Jovial",
        "Déprimé",
        "Fatigué",
        "Dynamique"
      ],
      sommeil: ["Très bien", "Bien", "Mal", "Très mal"],
      cynthia: false,
      amelie: false,
      clara: false
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
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
