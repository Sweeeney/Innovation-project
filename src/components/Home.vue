<template>
  <v-content>
      <header>
        <div v-if="user.loggedIn"> 
          <v-row>
            <v-col class="text-left">
              <h2 class="ps-4 ma-2 font-weight-thin headline"> Bienvenue {{user.data.displayName}}</h2>
            </v-col>
            <v-col class="text-right">
              <v-btn tile large class="ma-2" color="teal lighten-4" @click.prevent="signOut">Déconnexion</v-btn>
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

    <!-- <v-card flat class="d-flex flex-wrap"> -->
      <h2 class="display-1 font-weight-thin pl-4 ma-2"> ACTUALITÉS </h2>

      <v-container fluid grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 sm8 md10 lg10> 
            <v-card height="400">
              <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                  :src="slide.src"

                >
                </v-carousel-item>
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
                  <v-col class="headline" cols="10" align="center">
                    MIN - 9&deg;C
                  </v-col>
                  <v-col class="headline" cols="10" align="center">
                    MAX - 23&deg;C
                  </v-col>
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
    <!-- </v-card>   -->

    <!-- <br>
    <v-divider></v-divider>
    <br>

    <div v-if="user.loggedIn">
      <h2 class="display-1 font-weight-thin pl-4 ma-2"> AUJOURD'HUI... </h2>
      <h3 class="subtitle-1 font-weight-thin pl-4 mx-2"> Comment te sens-tu ? ? </h3>

      <v-card width="40%" flat d-flex>
      <v-list>
        <v-form>
        <v-container>
          <v-list-item>
            <v-list-item-icon>
              <v-img 
                src='https://image.flaticon.com/icons/svg/1584/1584848.svg'
                alt='information'
                width='50'
              > 
              </v-img>
            </v-list-item-icon>  
            <v-list-item-content>
                <v-row>
                  <v-col
                    cols="12"
                    md="12"
                  >
                    <v-select
                    :items="sommeil"
                    label="As-tu bien dormi ?"
                    solo
                  ></v-select>
                  </v-col>
                </v-row>
            </v-list-item-content>  
          </v-list-item>  

          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-img 
                src='https://image.flaticon.com/icons/svg/1935/1935230.svg'
                alt='information'
                width='50'
              > 
              </v-img>
            </v-list-item-icon>
            <v-list-item-content>  
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-select
                    :items="ressentis"
                    label="Quelle est ton humeur du jour ?"
                    solo
                  ></v-select>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item> 
          <v-row align="center">
            <v-col class="text-center">
            <div> 
                <v-btn tile large class="mr-4" color="success" @click="validate">Valider</v-btn>
            </div>
            </v-col>
        </v-row>
        </v-container>
        </v-form>  
      </v-list>  
      </v-card>
    </div> -->
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

  export default {
    name: 'Home',
    data () {
      return {
        slides: [
          {
            src: 'https://lh3.googleusercontent.com/proxy/5kTuJhtekBEF8mi-N9h9gs5xLyQ3VNmr6DBn6SFFdRvIXRgYa2tmrB4owhX-1_p84FJJWCyEyXCoeq_7r6VL68e8cPEIX42lHlDHgW4u1OErX6nQtYd7avqfaxrPV3bAGKVSMQ-y6l8U_5yVPHta',
          },
          {
            src :'https://www.journalexpress.ca/wp-content/uploads/sites/6/2019/08/Fruit-l%C3%A9gume-1600x1068.jpg',
          },
          {
            src :'https://labellegang.s3.amazonaws.com/images/meditation-pleine-conscience_960_540.jpg',
          },
          {
            src :'https://resize-europe1.lanmedia.fr/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/developpement-personnel/sante-alimentation-bien-etre-cinq-livres-inspirants-pour-decouvrir-le-developpement-personnel-3613973/47451383-1-fre-FR/Sante-alimentation-bien-etre-cinq-livres-inspirants-pour-decouvrir-le-developpement-personnel.jpg',
          },
          {
            src :'https://static.vix.com/es/sites/default/files/styles/large/public/imj/otramedicina/P/Propiedades-del-masaje-con-piedras-calientes.jpg',
          },
        ],
        ressentis: [
          'Heureux',
          'Triste',
          'Jovial',
          'Déprimé',
          'Fatigué',
          'Dynamique'
        ],
        sommeil: [
          'Très bien',
          'Bien',
          'Mal',
          'Très mal',
        ],
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
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
  }
</script>
