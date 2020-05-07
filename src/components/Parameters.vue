<template>
    <v-content>
        <header>
            <div v-if="user.loggedIn"> 
            <v-row> 
                <v-col class="text-left">
                    <v-row>
                        <h2 class="ps-4 ma-2 font-weight-thin display-1"> 
                        <router-link to="/home"><v-icon>mdi-chevron-left</v-icon></router-link>
                        PARAMETRES </h2>
                    </v-row>
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

            <v-tabs
                background-color="teal lighten-5"
                grow
                light
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
                        <div v-if="item.content=='profil'" class="text-center">
                            <v-container fluid>
                                <v-row>
                                    <v-col class="text-left">
                                        <h2 class="display-0 font-weight-thin"> MES OBJECTIFS QUOTIDIENS </h2>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <div v-if="modifObjectifs==false">
                                            <v-row justify='space-around'>
                                            
                                                <v-card
                                                class="d-flex flex-wrap pa-2"
                                                elevation=0
                                                >
                                                    <v-col class="text-left">
                                                        <h3 class="display-0 font-weight-thin"> Nombre de pas : 10 000 pas</h3>
                                                        <h3 class="display-0 font-weight-thin"> Volume d'eau consommé : 2 litres </h3>
                                                        <h3 class="display-0 font-weight-thin"> Calories consommées : 2100 calories </h3>
                                                        <h3 class="display-0 font-weight-thin"> Temps d'activités personnelles : 2 heures </h3>
                                                    </v-col>
                                                </v-card>
                                                <v-card
                                                class="d-flex flex-wrap pa-2"
                                                elevation=0
                                                >
                                                    <v-col class="text-left">
                                                        <v-btn tile large class="ma-2" color="teal lighten-4" @click="modifObjectifs = !modifObjectifs">
                                                        Modifier
                                                        </v-btn>
                                                    </v-col>
                                                </v-card>
                                            </v-row>
                                        </div>
                                        <div v-else>
                                            <v-row justify='space-around'>
                                                <v-card
                                                class="d-flex flex-wrap pa-2"
                                                elevation=0
                                                >
                                                    <v-col class="text-left">
                                                        <v-row>
                                                            <h3 class="display-0 font-weight-thin"> Nombre de pas : </h3>
                                                            <v-text-field dense></v-text-field>
                                                            <h3 class="display-0 font-weight-thin">pas</h3>
                                                        </v-row>
                                                        <v-row>
                                                            <h3 class="display-0 font-weight-thin"> Volume d'eau consommé : </h3>
                                                            <v-text-field dense></v-text-field>
                                                            <h3 class="display-0 font-weight-thin"> litres </h3>
                                                        </v-row>
                                                        <v-row>
                                                            <h3 class="display-0 font-weight-thin"> Calories consommées : </h3>
                                                            <v-text-field dense></v-text-field>
                                                            <h3 class="display-0 font-weight-thin"> calories </h3>
                                                        </v-row>
                                                        <v-row>
                                                            <h3 class="display-0 font-weight-thin"> Temps d'activités personnelles : </h3>
                                                            <v-text-field dense></v-text-field>
                                                            <h3 class="display-0 font-weight-thin"> heures </h3>
                                                        </v-row>
                                                    </v-col>
                                                </v-card>
                                                <v-card
                                                class="d-flex flex-wrap pa-2"
                                                elevation=0
                                                >
                                                    <v-col class="text-left">
                                                        <v-btn tile large class="ma-2" color="teal lighten-4" @click="modifObjectifs = !modifObjectifs">
                                                        Valider
                                                        </v-btn>
                                                    </v-col>
                                                </v-card>
                                            </v-row>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-container fluid>
                                <v-row>
                                    <v-col class="text-left">
                                        <h2 class="display-0 font-weight-thin"> MES APPAREILS </h2>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <div v-if="modifAppareils==false">
                                            <v-row justify='space-around'>
                                                <v-card
                                                class="d-flex flex-wrap pa-2"
                                                elevation=0
                                                >
                                                    <v-col class="text-left">
                                                        <v-row>
                                                            <v-col>
                                                                <h3 class="display-0 font-weight-thin"> Appareils connectés : </h3>
                                                                <v-img
                                                                width="20%"
                                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThpJfKF6-PbO7a1ldNnqzaIswqLROTqJ-YRnV95LCKnCE9LNhr&usqp=CAU"
                                                                ></v-img>
                                                            </v-col>
                                                        </v-row>
                                                        <v-row>
                                                            <v-icon class="mr-2" small>mdi-clock</v-icon>
                                                            <h3 class="display-0 font-weight-thin"> Dernière mise à jour il y a 3 heures </h3>
                                                        </v-row>
                                                        <v-row>
                                                            <h3 class="display-0 font-weight-thin"> Mise à jour automatique toutes les 6 heures </h3>
                                                        </v-row>
                                                    </v-col>
                                                </v-card>
                                                <v-card
                                                class="d-flex flex-wrap pa-2"
                                                elevation=0
                                                >
                                                    <v-col class="text-left">
                                                        <v-btn tile large class="ma-2" color="teal lighten-4" @click="modifAppareils = !modifAppareils">
                                                        Modifier
                                                        </v-btn>
                                                    </v-col>
                                                </v-card>
                                            </v-row>
                                        </div>
                                        <div v-else>
                                            <v-row justify='space-around'>
                                                <v-card
                                                class="d-flex flex-wrap pa-2"
                                                elevation=0
                                                >
                                                    <v-col class="text-left">
                                                        <v-row>
                                                            <v-col>
                                                                <h3 class="display-0 font-weight-thin"> Appareils connectés : </h3>
                                                                <v-img
                                                                width="20%"
                                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThpJfKF6-PbO7a1ldNnqzaIswqLROTqJ-YRnV95LCKnCE9LNhr&usqp=CAU"
                                                                ></v-img>
                                                            </v-col>
                                                        </v-row>
                                                        <v-row>
                                                            <v-icon class="mr-2" small>mdi-clock</v-icon>
                                                            <h3 class="display-0 font-weight-thin"> Dernière mise à jour il y a 3 heures </h3>
                                                        </v-row>
                                                        <v-row>
                                                            <h3 class="display-0 font-weight-thin"> Mise à jour automatique toutes les </h3>
                                                            <v-autocomplete dense
                                                            :items=heureMAJ
                                                            ></v-autocomplete>
                                                        </v-row>
                                                    </v-col>
                                                </v-card>
                                                <v-card
                                                class="d-flex flex-wrap pa-2"
                                                elevation=0
                                                >
                                                    <v-col class="text-left">
                                                        <v-btn tile large class="ma-2" color="teal lighten-4" @click="modifAppareils = !modifAppareils">
                                                        Valider
                                                        </v-btn>
                                                    </v-col>
                                                </v-card>
                                            </v-row>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                        <div v-if="item.content=='infos'" class="text-center">
                            <v-container fluid>
                                <v-row>
                                    <v-col>
                                        <v-row justify='space-around'>
                                            <v-card
                                            class="d-flex flex-wrap pa-2"
                                            elevation=0
                                            >
                                                <v-col>
                                                    <v-img
                                                        height="150"
                                                        width="150"
                                                        src="https://i.pinimg.com/564x/d1/e6/23/d1e623f28a9b55d08f8c0bf91dd92092.jpg"
                                                        aspect-ratio="1"
                                                    ></v-img> 
                                                </v-col>
                                            </v-card>

                                            <div v-if="modifInfos==false">
                                                <v-card
                                                class="d-flex flex-wrap pa-2"
                                                elevation=0
                                                >
                                                    <v-col class="text-left">
                                                        <h3 class="display-0 font-weight-thin"> Nom :  {{user.data.displayName}}</h3>
                                                        <h3 class="display-0 font-weight-thin"> Mot de passe :  ********</h3>
                                                        <h3 class="display-0 font-weight-thin"> Adresse mail :  {{user.data.email}}</h3>
                                                        <br>
                                                        <v-btn tile large class="ma-2" color="teal lighten-4" @click="modifInfos = !modifInfos">
                                                        Modifier
                                                        </v-btn>
                                                    </v-col>
                                                </v-card>
                                            </div>
                                            <div v-else>
                                                <v-card
                                                class="d-flex flex-wrap pa-2"
                                                elevation=0
                                                >
                                                    <v-col class="text-left">
                                                        <v-row>
                                                            <h3 class="display-0 font-weight-thin"> Nom : </h3>
                                                            <v-text-field dense></v-text-field>
                                                        </v-row>
                                                        <v-row>
                                                            <h3 class="display-0 font-weight-thin"> Mot de passe : </h3>
                                                            <v-text-field dense></v-text-field>
                                                        </v-row>
                                                        <h3 class="display-0 font-weight-thin"> Adresse mail :  {{user.data.email}}</h3>
                                                        <br>
                                                        <v-btn tile large class="ma-2" color="teal lighten-4" @click="modifInfos = !modifInfos">
                                                        Valider
                                                        </v-btn>
                                                    </v-col>
                                                </v-card>
                                            </div>
                                            
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-content>
                </v-tab-item>
            </v-tabs>
            <v-card 
            class=" mx-auto"
            height="50px"
            flat>
                <v-bottom-navigation v-model="bottomNav" fixed >
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

export default {
    name:'Parameters',
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
      }
    },
    computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
    },
    data(){
        return{
            modifInfos:false,
            modifAppareils:false,
            modifObjectifs:false,
            tab: null,
            items: [
                { tab: 'MON PROFIL', content: 'profil' },
                { tab: 'MES INFORMATIONS PERSONNELLES', content: 'infos' },
            ],
            heureMAJ:[
                {text:"1 heure",value:1},
                {text:"3 heures",value:3},
                {text:"5 heures",value:5},
                {text:"10 heures",value:10},

            ],
        }
    }
}
</script>