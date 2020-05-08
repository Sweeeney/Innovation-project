<template>
  <v-content>
    <header>
      <div v-if="user.loggedIn">
        <v-row>
          <v-col class="text-left">
            <v-row>
              <h2 class="ps-4 ma-2 font-weight-thin display-1">
                <router-link to="/home">
                  <v-icon>mdi-chevron-left</v-icon>
                </router-link>PARAMÈTRES
              </h2>
            </v-row>
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
      <v-tabs background-color="teal lighten-5" grow light>
        <v-tab v-for="item in items" :key="item.tab" :href="'#' + item.content">{{ item.tab }}</v-tab>
        <v-tabs-slider color="teal darken-2"></v-tabs-slider>
        <v-tab-item v-for="item in items" :key="item.content" :value="'' + item.content">
          <v-content>
            <div v-if="item.content=='profil'" class="text-center">
              <v-container fluid>
                <v-row>
                  <v-col class="text-left">
                    <h2 class="ps-4 ma-2 headline font-weight-thin">MES OBJECTIFS QUOTIDIENS</h2>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div v-if="modifObjectifs==false">
                      <v-layout row wrap class="mx-auto align-center justify-center">
                        <v-flex xs12 md7>
                          <v-card class="d-flex flex-wrap pa-2">
                              <v-row justify="center" align="center">
                                <v-col justify="center" align="center" xs10>
                                    <v-img
                                        src="https://www.bang-marketing.com/wp-content/uploads/1999/08/bhag-lobjectif-audacieux-qui-vous-propulse-283.png"
                                        alt="objectif"
                                        max-height="200px"
                                        max-width="200px"
                                    ></v-img>
                                </v-col>

                                <br class="d-flex d-sm-none" />

                                <v-col class="text-left" justify="center" align="center" xs12>
                                    <h3 class="display-0 font-weight-thin">
                                        <strong>Nombre de pas à effectuer</strong>
                                        : {{ownData.objectifPas}} pas
                                    </h3>
                                    <h3 class="display-0 font-weight-thin">
                                        <strong>Volume d'eau à consommer</strong>
                                        : {{ownData.objectifEau}} verre(s)
                                    </h3>
                                    <h3 class="display-0 font-weight-thin">
                                        <strong>Calories à consommer</strong>
                                        : {{ownData.objectifCalories}} calories
                                    </h3>
                                    <h3 class="display-0 font-weight-thin">
                                        <strong>Temps d'activités personnelles</strong>
                                        : {{ownData.objectifTempsPerso}} minutes
                                    </h3>
                                </v-col>
                              </v-row>
                          </v-card>
                        </v-flex>
                        <v-flex xs12 md2>
                          <v-card class="d-flex flex-wrap pa-2" elevation="0">
                            <v-col class="text-left">
                              <v-btn
                                tile
                                large
                                class="ma-2"
                                color="teal lighten-4"
                                @click="modifObjectifs = !modifObjectifs"
                              >Modifier</v-btn>
                            </v-col>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </div>
                    <div v-else>
                      <v-layout row wrap class="mx-auto align-center justify-center">
                        <v-flex xs12 md7>
                          <v-card class="flex-wrap pa-2">
                            <v-col class="text-left">
                              <!-- Modification objectif pas -->
                              <v-row pl4>
                                <h3 class="display-0 font-weight-thin">Nombre de pas à effectuer :</h3>
                                <v-text-field dense v-model="pasObjectif"></v-text-field>
                                <h3 class="display-0 font-weight-thin">pas</h3>

                                <v-spacer></v-spacer>
                                <v-btn small color="success" dark @click="modifierPas">OK</v-btn>
                              </v-row>

                              <v-snackbar v-model="snackbarPas">
                                Ton objectif de pas a été modifié !
                                <v-btn color="teal" text @click="snackbarPas = false">Fermer</v-btn>
                              </v-snackbar>

                              <!-- Modification objectif eau -->
                              <v-row>
                                <h3 class="display-0 font-weight-thin">Volume d'eau à consommer :</h3>
                                <v-text-field dense v-model="eauObjectif"></v-text-field>
                                <h3 class="display-0 font-weight-thin">verres</h3>

                                <v-spacer></v-spacer>
                                <v-btn small color="success" dark @click="modifierEau">OK</v-btn>
                              </v-row>

                              <v-snackbar v-model="snackbarEau">
                                Ton volume d'eau à consommer a été modifié !
                                <v-btn color="teal" text @click="snackbarEau = false">Fermer</v-btn>
                              </v-snackbar>

                              <!-- Modification objectif calories -->
                              <v-row>
                                <h3 class="display-0 font-weight-thin">Calories à consommer :</h3>
                                <v-text-field dense v-model="caloriesObjectif"></v-text-field>
                                <h3 class="display-0 font-weight-thin">calories</h3>

                                <v-spacer></v-spacer>
                                <v-btn small color="success" dark @click="modifierCalories">OK</v-btn>
                              </v-row>

                              <v-snackbar v-model="snackbarCalories">
                                Ton nombre de calories à consommer a été modifié !
                                <v-btn color="teal" text @click="snackbarCalories = false">Fermer</v-btn>
                              </v-snackbar>

                              <!-- Modification objectif temps perso -->
                              <v-row>
                                <h3
                                  class="display-0 font-weight-thin"
                                >Temps d'activités personnelles :</h3>
                                <v-text-field dense v-model="tempsPersoObjectif"></v-text-field>
                                <h3 class="display-0 font-weight-thin">minutes</h3>

                                <v-spacer></v-spacer>
                                <v-btn small color="success" dark @click="modifierTempsPerso">OK</v-btn>
                              </v-row>

                              <v-snackbar v-model="snackbarTempsPerso">
                                Ton temps d'activités personnelles a été modifié !
                                <v-btn color="teal" text @click="snackbarTempsPerso = false">Fermer</v-btn>
                              </v-snackbar>
                            </v-col>
                          </v-card>
                        </v-flex>
                        <v-flex xs12 md2>
                          <v-card class="d-flex flex-wrap pa-2" elevation="0">
                            <v-col class="text-left">
                              <v-btn
                                tile
                                large
                                class="ma-2"
                                color="teal lighten-4"
                                @click="modifObjectifs = !modifObjectifs"
                              >Terminer</v-btn>
                            </v-col>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-col>
                </v-row>
              </v-container>

              <!-- Affichage des appareils connectés de l'utilisateur -->
              <v-container fluid>
                <v-row>
                  <v-col class="text-left">
                    <h2 class="ps-4 ma-2 headline font-weight-thin">MES APPAREILS</h2>
                    <span class="ps-8"> 
                      <a class="caption font-weight-black teal--text">Ajouter un appareil </a> | <a to="" class="caption font-weight-black teal--text"> Supprimer un appareil</a>
                    </span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div v-if="modifAppareils==false">
                      <v-layout row wrap class="mx-auto align-center justify-center">
                        <v-flex xs12 md7>
                          <v-card class="d-flex flex-wrap pa-2">
                            <v-col cols="7">
                              <h3 class="display-0 font-weight-thin text-left">Appareil connecté 1 :</h3>
                              <br />
                              <v-card flat class="mx-auto text-center align-center justify-center">
                                <v-img
                                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FlgA40KlLz-c%2Fmaxresdefault.jpg&f=1&nofb=1"
                                  alt="objectif"
                                  aspect-ratio="2"
                                  position="center"
                                ></v-img>
                              </v-card>
                            </v-col>
                            <v-col class="text-center align-center mx-xs-auto">
                              <br />
                              <br />
                              <br />
                              <br />
                              <h3 class="display-0 font-weight-thin">
                                <strong>Samsung Gear Fit 2</strong>
                              </h3>
                              <span class="display-0 font-weight-thin">Actuellement connectée</span>
                              <br />
                              <br />
                              <v-row class="text-center justify-center">
                                <v-icon class="mr-2" small>mdi-clock</v-icon>
                                <h3
                                  class="caption font-weight-thin"
                                >Dernière mise à jour il y a 3 heures</h3>
                              </v-row>
                              <v-row class="text-center justify-center">
                                <h3
                                  class="caption font-weight-thin"
                                >Mise à jour automatique toutes les {{ownData.majAutoAppareil}} heures</h3>
                              </v-row>
                            </v-col>
                          </v-card>
                        </v-flex>
                        <v-flex sx12 md2>
                          <v-card class="d-flex flex-wrap pa-2" elevation="0">
                            <v-col class="text-left">
                              <v-btn
                                tile
                                large
                                class="ma-2"
                                color="teal lighten-4"
                                @click="modifAppareils = !modifAppareils"
                              >Modifier</v-btn>
                            </v-col>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </div>

                    <!-- L'utilisateur souhaite modifier les informations sur son appareil -->
                    <div v-else>
                        <v-layout row wrap class="mx-auto align-center justify-center">
                        <v-flex xs12 md7>
                          <v-card class="d-flex flex-wrap pa-2">
                            <v-col cols="7">
                              <h3 class="display-0 font-weight-thin text-left">Appareil connecté 1 :</h3>
                              <br />
                              <v-card flat class="mx-auto text-center align-center justify-center">
                                <v-img
                                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FlgA40KlLz-c%2Fmaxresdefault.jpg&f=1&nofb=1"
                                  alt="objectif"
                                  aspect-ratio="2"
                                  position="center"
                                ></v-img>
                              </v-card>
                            </v-col>
                            <v-col class="text-center align-center mx-xs-auto">
                              <br />
                              <br />
                              <br />
                              <br />
                              <h3 class="display-0 font-weight-thin">
                                <strong>Samsung Gear Fit 2</strong>
                              </h3>
                              <span class="display-0 font-weight-thin">Actuellement connectée</span>
                              <br />
                              <br />
                              <v-row class="text-center justify-center">
                                <v-icon class="mr-2" small>mdi-clock</v-icon>
                                <h3
                                  class="caption font-weight-thin"
                                >Dernière mise à jour il y a 3 heures</h3>
                              </v-row>
                              <v-row class="text-center justify-center">
                                <h3 class="caption font-weight-thin">
                                    Mise à jour automatique toutes les 
                                    <v-autocomplete dense v-model="majAppareil" :items="heureMAJ" text-align="center"/>
                                </h3>                                
                              </v-row>
                            </v-col>
                          </v-card>
                        </v-flex>
                        <v-flex sx12 md2>
                          <v-card class="d-flex flex-wrap pa-2" elevation="0">
                            <v-col class="text-left">
                              <v-btn
                                tile
                                large
                                class="ma-2"
                                color="teal lighten-4"
                                @click="modifiermajAppareil"
                              >Terminer</v-btn>
                            </v-col>

                            <v-snackbar v-model="snackbarAppareil">
                                La mise à jour automatique de ton appareil à été modifiée !
                                <v-btn color="teal" text @click="snackbarAppareil = false">Fermer</v-btn>
                            </v-snackbar>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>

            <div v-if="item.content=='infos'" class="text-center">

              <v-container fluid>
                <v-row>
                  <v-col>
                      <div v-if="modifInfos==false">
                        <v-layout row wrap class="mx-auto align-center justify-center">
                            <v-flex xs12 md7>
                                <v-card class="d-flex flex-wrap pa-2">
                                    <v-row align="center" justify="center">
                                        <v-col align="center" justify="center" xs10>
                                            <v-img
                                                max-height="250px"
                                                max-width="250px"
                                                src="https://i.pinimg.com/564x/6b/07/89/6b0789daf8c2b86fac1072205486d20e.jpg"
                                            ></v-img>
                                        </v-col>
                                        <v-col class="text-left" align="center" justify="center" xs12>
                                            <h3 class="display-0 font-weight-thin"> <strong>Nom </strong> : {{utilisateur.displayName}}</h3>
                                            <h3 class="display-0 font-weight-thin"> <strong>Mot de passe </strong> : ********</h3>
                                            <h3 class="display-0 font-weight-thin"> <strong> Adresse mail </strong> : {{utilisateur.email}}</h3>
                                            <br />
                                            <h3 class="caption font-weight-thin"> Inscrit(e) depuis le {{ownData.signUpDate}} </h3>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md2>
                            <v-card class="d-flex flex-wrap pa-2" elevation="0">
                                <v-col class="text-left">
                                <v-btn
                                tile
                                large
                                class="ma-2"
                                color="teal lighten-4"
                                @click="modifInfos = !modifInfos"
                                >Modifier</v-btn>
                                </v-col>
                            </v-card>
                            </v-flex>
                        </v-layout>
                      </div>

                      <!-- L'utilisateur souhaite modifier ses informations personnelles -->
                      <div v-else>
                        <v-layout row wrap class="mx-auto align-center justify-center">
                            <v-flex xs12 md7>
                                <v-card class="d-flex flex-wrap pa-2">
                                    <v-row align="center" justify="center">
                                        <v-col align="center" justify="center" xs10 md3>
                                            <v-img
                                                max-height="250px"
                                                max-width="250px"
                                                src="https://i.pinimg.com/564x/6b/07/89/6b0789daf8c2b86fac1072205486d20e.jpg"
                                            ></v-img>
                                        </v-col>
                                        <v-col class="text-left" align="center" justify="center" xs12 md5>
                                            <!-- Modification nom utilisateur -->
                                            <v-row>
                                                <h3 class="display-0 font-weight-thin"> <strong>Nom </strong> : {{utilisateur.displayName}}</h3>
                                            </v-row>

                                            <!-- Modification mot de passe -->
                                            <v-row>
                                                <h3 class="display-0 font-weight-thin"> 
                                                    <strong>Mot de passe</strong> : 
                                                    <v-text-field dense v-model="mdp" :rules="passwordOKRules" type="password"></v-text-field>
                                                </h3>
                                                <v-btn small color="success" dark @click="modifierMDP">OK</v-btn>
                                            </v-row>

                                            <v-snackbar v-model="snackbarMDP">
                                                La mise à jour de ton mot de passe à été effectuée !
                                                <v-btn color="teal" text @click="snackbarMDP = false">Fermer</v-btn>
                                            </v-snackbar>

                                            <!-- Modification email -->
                                            <v-row>
                                                <h3 class="display-0 font-weight-thin"> <strong> Adresse mail </strong> : {{utilisateur.email}}</h3>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md2>
                            <v-card class="d-flex flex-wrap pa-2" elevation="0">
                                <v-col class="text-left">
                                <v-btn
                                tile
                                large
                                class="ma-2"
                                color="teal lighten-4"
                                @click="modifInfos = !modifInfos"
                                >Terminer</v-btn>
                                </v-col>
                            </v-card>
                            </v-flex>
                        </v-layout>
                      </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-content>
        </v-tab-item>
      </v-tabs>
      <v-card class="mx-auto" height="50px" flat>
        <v-bottom-navigation v-model="bottomNav" fixed>
          <v-btn value="share">
            <span>Partager</span>
            <v-icon>mdi-share</v-icon>
          </v-btn>
          <v-btn value="favoris">
            <span>Favoris</span>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn value="aide">
            <span>Aide</span>
            <v-icon>mdi-comment-question-outline</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-card>
    </div>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import { firestore } from "../main";

export default {
  name: "Parameters",

  firestore() {
    return {
      usersData: firestore.collection("users-data"),
      ownData: firestore.collection("users-data").doc(this.utilisateur.displayName)
    };
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

    modifierPas: function() {
      this.$firestore.usersData
        .doc(this.utilisateur.displayName)
        .update({
          objectifPas: this.pasObjectif
        })
        .then((this.snackbarPas = true));
    },

    modifierEau: function() {
      this.$firestore.usersData
        .doc(this.utilisateur.displayName)
        .update({
          objectifEau: this.eauObjectif
        })
        .then((this.snackbarEau = true));
    },

    modifierCalories: function() {
      this.$firestore.usersData
        .doc(this.utilisateur.displayName)
        .update({
          objectifCalories: this.caloriesObjectif
        })
        .then((this.snackbarCalories = true));
    },

    modifierTempsPerso: function() {
      this.$firestore.usersData
        .doc(this.utilisateur.displayName)
        .update({
          objectifTempsPerso: this.tempsPersoObjectif
        })
        .then((this.snackbarTempsPerso = true));
    },

    modifiermajAppareil: function() {
      this.$firestore.usersData
        .doc(this.utilisateur.displayName)
        .update({
          majAutoAppareil: this.majAppareil
        })
        .then(
            this.snackbarAppareil = true,
            this.modifAppareils = !this.modifAppareils
        );
    },

    modifierMDP: function(){
        this.utilisateur.updatePassword(this.mdp)
        .then((this.snackbarMDP = true));
    },

  },

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  data() {
    return {
      usersData: [],
      ownData: [],

      //Initialisation de l'utilisateur courant
      utilisateur:firebase.auth().currentUser,

      //Modification de l'objectif pas
      pasObjectif: "",
      snackbarPas: false,
      //Modification de l'objectif eau
      eauObjectif: "",
      snackbarEau: false,
      //Modification de l'objectif calories
      caloriesObjectif: "",
      snackbarCalories: false,
      //Modification de l'objectif temps perso
      tempsPersoObjectif: "",
      snackbarTempsPerso: false,
      //Modification de la maj auto de l'appareil connecté
      majAppareil: "",
      snackbarAppareil: false,

      //Modification du mot de passe
      mdp: "",
      snackbarMDP: false,
      passwordRules: [
        v => (v && v.length >= 8) || 'Ton mot de passe doit faire plus de 8 caractères',
        v => (v && v.length <= 25) || 'Ton mot de passe ne doit pas dépasser 25 caractères',
      ],

      modifInfos: false,
      modifAppareils: false,
      modifObjectifs: false,
      tab: null,
      items: [
        { tab: "MON PROFIL", content: "profil" },
        { tab: "MES INFORMATIONS PERSONNELLES", content: "infos" }
      ],
      heureMAJ: [
        { text: "1 heure", value: 1 },
        { text: "3 heures", value: 3 },
        { text: "5 heures", value: 5 },
        { text: "10 heures", value: 10 }
      ]
    };
  }
};
</script>