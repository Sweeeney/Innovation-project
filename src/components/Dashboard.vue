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
              {{date}} (Aujourd'hui)
            </h2>
            <br />
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

    <!-- Partie principale uniquement visible pour les utilisateurs connectés -->
    <div v-if="user.loggedIn">
      <v-tabs grow background-color="teal lighten-5" color="blue-grey darken-4">
        <v-tabs-slider color="teal darken-2"></v-tabs-slider>

        <!-- OBJECTIFS QUOTIDIENS -->
        <v-tab>Objectifs quotidiens</v-tab>

        <v-tab-item>
          <br />
          <h2 class="ps-4 ma-2 font-weight-thin headline">MON TABLEAU DE BORD</h2>
          <br />

          <!--LIGNE 1 -->
          <v-layout row wrap>
            <v-flex xs12 md6>
              <!--Nombre de pas effectués-->
              <v-card align="center" flat>
                <v-progress-circular
                  :rotate="-90"
                  :size="155"
                  :width="20"
                  :value="(ownData.nbPas * 100) / ownData.objectifPas"
                  color="green"
                >
                  <v-icon size="55">mdi-walk</v-icon>
                </v-progress-circular>

                <br />
                <br />

                <v-card
                  class="d-flex justify-center align-center mb-6"
                  color="grey lighten-4"
                  max-width="600"
                  max-height="200"
                >
                  <div align="center" justify="center">
                    <h3
                      class="ps-4 ma-2 font-weight-thin headline"
                    >{{ownData.nbPas}} pas effectués.</h3>
                    <h3 class="ps-4 ma-2 font-weight-thin headline" v-if="ownData.objectifPas - ownData.nbPas > 0">
                      Plus que {{ownData.objectifPas - ownData.nbPas}} pas avant l'objectif !
                    </h3>
                    <h3 class="ps-4 ma-2 font-weight-thin headline" v-else>
                      Tu as atteint ton objectif (voire même plus) !
                    </h3>
                    <h4 class="ps-3 ma-3 font-weight-thin">(Objectif de {{ownData.objectifPas}} pas / jour)</h4>
                  </div>
                </v-card>
              </v-card>
            </v-flex>

            <v-spacer></v-spacer>

            <v-flex xs12 md6>
              <!--Quantité d'eau consommée-->
              <v-card align="center" flat>
                <v-progress-circular
                  :rotate="-90"
                  :size="155"
                  :width="20"
                  :value="(ownData.eau * 100) / ownData.objectifEau"
                  color="blue"
                >
                  <v-icon size="55">mdi-water</v-icon>
                </v-progress-circular>

                <br />
                <br />

                <v-card
                  class="d-flex justify-center align-center mb-6"
                  color="grey lighten-4"
                  max-width="600"
                  max-height="200"
                >
                  <div align="center" justify="center">
                    <h3
                      class="ps-4 ma-2 font-weight-thin headline"
                    >{{ownData.eau}} verre(s) d'eau consommé(s).</h3>
                    <h3 class="ps-4 ma-2 font-weight-thin headline" v-if="ownData.objectifEau - ownData.eau > 0">
                      Plus que {{ownData.objectifEau - ownData.eau}} verres avant l'objectif !
                    </h3>
                    <h3 class="ps-4 ma-2 font-weight-thin headline" v-else>
                      Tu as atteint ton objectif (voire même plus) !
                    </h3>
                    <h4 class="ps-3 ma-3 font-weight-thin">
                      (Objectif de {{ownData.objectifEau}} verres / jour)
                    </h4>
                  </div>
                </v-card>
              </v-card>
            </v-flex>
          </v-layout>

          <br />

          <!--LIGNE 2-->
          <v-layout row wrap>
            <v-flex xs12 md6>
              <!--Calories consommées-->
              <v-card align="center" flat>
                <v-progress-circular
                  :rotate="-90"
                  :size="155"
                  :width="20"
                  :value="(ownData.calories * 100) / ownData.objectifCalories"
                  color="pink"
                >
                  <v-icon size="55">mdi-food</v-icon>
                </v-progress-circular>

                <br />
                <br />

                <v-card
                  class="d-flex justify-center align-center mb-6"
                  color="grey lighten-4"
                  max-width="600"
                  max-height="200"
                >
                  <div align="center" justify="center">
                    <h3
                      class="ps-4 ma-2 font-weight-thin headline"
                    >{{ownData.calories}} calories consommées.</h3>
                    <h3 class="ps-4 ma-2 font-weight-thin headline" v-if="ownData.objectifCalories - ownData.calories > 0">
                      {{ownData.objectifCalories - ownData.calories}} calories restantes !
                    </h3>
                    <h3 class="ps-4 ma-2 font-weight-thin headline" v-else>
                      Tu as atteint ton objectif (voire même plus) !
                    </h3>
                    <h4 class="ps-3 ma-3 font-weight-thin">(Objectif de {{ownData.objectifCalories}} calories / jour)</h4>
                  </div>
                </v-card>
              </v-card>
            </v-flex>

            <v-flex xs12 md6>
              <!--"Temps pour moi"-->
              <v-card align="center" flat>
                <v-progress-circular
                  :rotate="-90"
                  :size="155"
                  :width="20"
                  :value="(ownData.tempsPerso * 100) / ownData.objectifTempsPerso"
                  color="deep-purple accent-2"
                >
                  <v-icon size="55">mdi-emoticon-excited-outline</v-icon>
                </v-progress-circular>

                <br />
                <br />

                <v-card
                  class="d-flex justify-center align-center mb-6"
                  color="grey lighten-4"
                  max-width="600"
                  max-height="200"
                >
                  <div align="center" justify="center">
                    <h3
                      class="ps-4 ma-2 font-weight-thin headline"
                    >{{ownData.tempsPerso}} minutes accordées à des activités personnelles.</h3>
                    <h3 class="ps-4 ma-2 font-weight-thin headline" v-if="ownData.objectifTempsPerso - ownData.tempsPerso > 0">
                      Prends du temps pour prendre soin de toi.
                    </h3>
                    <h3 class="ps-4 ma-2 font-weight-thin headline" v-else>
                      Félicitations, tu prends soin de toi !
                    </h3>
                    <h4 class="ps-3 ma-3 font-weight-thin">(Objectif de {{ownData.objectifTempsPerso}} minutes / jour)</h4>
                  </div>
                </v-card>
              </v-card>
            </v-flex>
          </v-layout>

          <br />
          <v-divider inset width="80%" class="mx-auto"></v-divider>
          <br />

          <h2 class="ps-4 ma-2 font-weight-thin headline">À TOI DE NOUS DIRE...</h2>

          <!--Bouton pour modifier-->
          <v-layout row wrap class="mx-auto align-center justify-center">
            <v-flex xs12 md9>
              <v-card flat justify="center" class="mx-auto">
                <v-list>
                  <v-form>
                    <v-container>
                      <v-list-item>
                        <v-list-item-action>
                          <v-btn @click="ajoutEau ^= true" fab dark small color="blue">
                            <v-icon>mdi-water</v-icon>
                          </v-btn>
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title class="headline font-weight-thin ma-2">Eau</v-list-item-title>
                        </v-list-item-content>
                        <v-row align="center" justify="end" xs12 sm6 md8>
                          <!--Ajout de l'eau-->
                          <v-col v-show="ajoutEau">
                            <v-select v-model="eauAjout" :items="itemsEau" label="Quelle quantité d'eau as-tu bu ?" ></v-select>
                            <v-btn small color="success" dark @click="addWater">OK</v-btn>
                          </v-col>
                        </v-row>
                      </v-list-item>

                      <v-snackbar v-model="snackbarEau">
                        La quantité d'eau que tu as bu a été sauvegardée !
                        <v-btn color="teal" text @click="snackbarEau = false">Fermer</v-btn>
                      </v-snackbar>

                      <v-divider inset></v-divider>

                      <v-list-item>
                        <v-list-item-action>
                          <v-btn @click="ajoutNourriture ^= true" fab dark small color="pink">
                            <v-icon>mdi-food</v-icon>
                          </v-btn>
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title class="headline font-weight-thin ma-2">Calories</v-list-item-title>
                        </v-list-item-content>
                        <v-row align="center" justify="end" xs12 sm6 md8>
                          <!-- Ajout de la nourriture -->
                          <v-col v-show="ajoutNourriture">
                            <v-select
                              v-model="caloriesAjout"
                              :items="itemsNourriture"
                              label="Combien de calories estimes-tu avoir consommé environ ? "
                            ></v-select>
                            <v-btn small color="success" dark @click="addCalories">OK</v-btn>
                          </v-col>
                        </v-row>
                      </v-list-item>

                      <v-snackbar v-model="snackbarCalories">
                        Les calories que tu as consommé ont été sauvegardées !
                        <v-btn color="teal" text @click="snackbarCalories = false">Fermer</v-btn>
                      </v-snackbar>

                      <v-divider inset></v-divider>

                      <v-list-item>
                        <v-list-item-action>
                          <v-btn @click="ajoutTemps^=true" fab dark small color="deep-purple accent-2">
                            <v-icon>mdi-emoticon-excited-outline</v-icon>
                          </v-btn>
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title class="headline font-weight-thin ma-2">Temps personnel</v-list-item-title>
                        </v-list-item-content>
                        <v-row align="center" justify="end" xs12 sm6 md8>
                          <!-- Ajout du temps personnel -->
                          <v-col v-show="ajoutTemps">
                            <v-select v-model="tempsPersoAjout" :items="itemsTemps" label="Ce temps là est bon pour toi, bravo !"></v-select>
                            <v-btn small color="success" dark @click="addTempsPerso">OK</v-btn>
                          </v-col>
                        </v-row>
                      </v-list-item>

                      <v-snackbar v-model="snackbarPerso">
                        Ton temps personnel a été sauvegardé !
                        <v-btn color="teal" text @click="snackbarPerso = false">Fermer</v-btn>
                      </v-snackbar>
                    </v-container>
                  </v-form>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>

        <!-- ACTIVITE PHYSIQUE -->
        <v-tab>Activité physique du jour</v-tab>
        <v-tab-item>
          <br />
          <h2 class="ps-4 ma-2 font-weight-thin headline">POUR BIEN COMMENCER !</h2>
          <br />
          <!--Fréquence cardiaque actuelle-->
          <v-layout row wrap class="mx-auto align-center justify-center">
            <v-flex xs12 md4>
              <v-card class="d-flex justify-center mx-auto mb-6" color="grey lighten-4" width="375">
                <v-card class="mx-auto" outlined>
                  <!--Carte de fréquence cardiaque-->
                  <v-card-title>
                    <v-icon
                      :color="checking ? 'red lighten-2' : 'indigo'"
                      class="mr-12"
                      size="80"
                      @click="takePulse"
                    >mdi-heart-pulse</v-icon>

                    <v-row align="start">
                      <div>
                        <span class="display-2 font-weight-black" v-text="avg || '—'"></span>
                        <strong v-if="avg">BPM</strong>
                      </div>
                    </v-row>
                    <v-spacer></v-spacer>
                  </v-card-title>

                  <v-sheet color="transparent">
                    <v-sparkline
                      :key="String(avg)"
                      :smooth="16"
                      :gradient="['#f72047', '#ffd200', '#1feaea']"
                      :line-width="7"
                      :value="bpm"
                      auto-draw
                      stroke-linecap="round"
                    ></v-sparkline>
                  </v-sheet>
                </v-card>
              </v-card>
            </v-flex>

            <v-flex xs12 md6>
              <v-card flat class="mx-auto">
                <div class="text-left" justify="left" align="left">
                  <br />
                  <h3 class="ps-4 ma-2 font-weight-thin headline">Fréquence cardiaque actuelle.</h3>
                  <h3
                    class="ps-4 ma-2 font-weight-thin headline"
                  >Appuyez sur le coeur pour actualiser.</h3>

                  <h4
                    class="ps-3 ma-3 font-weight-thin"
                  >(Assurez-vous que votre montre soit connectée.)</h4>
                </div>
              </v-card>
            </v-flex>
          </v-layout>

          <br />
          <v-divider inset width="80%" class="mx-auto"></v-divider>
          <br />

          <h2 class="ps-4 ma-2 font-weight-thin headline">QUEL SPORT AS-TU PRATIQUÉ ?</h2>

          <v-layout row wrap class="mx-auto align-center justify-center">
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="football"
                  src="https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/sport/football-y-a-t-il-deja-un-favori-pour-leuro-3925604/53616090-1-fre-FR/Football-y-a-t-il-deja-un-favori-pour-l-Euro.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="football"
                    label="Football"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="basketball"
                  src="https://media.istockphoto.com/photos/basketball-picture-id959080376?k=6&m=959080376&s=612x612&w=0&h=BgZIZABPts_kaCbe7jrZA5T9OrXXgNd9MgyN9bRir6U="
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="basketball"
                    label="Basketball"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="equitation"
                  src="https://media.ucpa.com/t_UCPA/UCPA-SPORT-NATURE/France/00029155.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="equitation"
                    label="Equitation"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="tennis"
                  src="https://www.tendanceouest.com/photos/maxi/354565.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="tennis"
                    label="Tennis"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="natation"
                  src="https://img-3.journaldesfemmes.fr/zVJtuedt_1sxqqHZaWurgKdc8EA=/910x607/smart/208de27d86c04b5aa4b33b50da2614cd/ccmcms-jdf/15444919.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="natation"
                    label="Natation"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>

          <br class="d-none d-sm-flex" />

          <v-layout row wrap class="mx-auto align-center justify-center">
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="tennisTable"
                  src="https://www.ville.repentigny.qc.ca/getmedia/6e27b679-01b1-407a-9332-5a0a87e3b9d4/Tennis-de-table.jpg.aspx?width=1400&height=933&ext=.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="tennisTable"
                    label="Tennis de table"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="baseball"
                  src="https://baseballvimontauteuil.com/wp-content/uploads/2018/02/0259287174e4f9b047a90d9098be5890_p_vi_66400_1519411993.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="baseball"
                    label="Baseball"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="marche"
                  src="https://viehealthy.com/wp-content/uploads/2017/08/marche-a-pied.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="marche"
                    label="Marche à pied"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="handball"
                  src="https://cdn.lajoliemaison.fr/wp-content/uploads/2017/12/1-34-1024x681.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="handball"
                    label="Handball"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="golf"
                  src="https://argr-sandou.e-monsite.com/medias/images/golf.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="golf"
                    label="Golf"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>

          <br class="d-none d-sm-flex" />

          <v-layout row wrap class="mx-auto align-center justify-center">
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="danse"
                  src="https://www.dax.fr/wp-content/uploads/2019/03/le-conservatoire-de-musique-et-de-danse.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="danse"
                    label="Danse"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="velo"
                  src="https://cdn.tomas-travel.com/fit/repository/FIT00020070121840693/TBX00020050000221441/FIT00020070124494904_sized_800_0.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="velo"
                    label="Vélo"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="bowling"
                  src="https://cdn-media.rtl.fr/cache/cngvJ79xE5jX3xQKAhKQ6A/2000v1333-0/online/image/2019/1023/7799315864_une-piste-de-bowling-illustration.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="bowling"
                    label="Bowling"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="judo"
                  src="https://www.judosavoie.com/wp-content/uploads/2019/02/IMAGE-JUDO-PROJECTION.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="judo"
                    label="Judo"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md2>
              <v-card class="mx-auto">
                <v-img
                  alt="course"
                  src="https://www.ergysport.com/wp-content/uploads/2017/12/course-a-pied-regime-alimentaire-sportif-b.jpg"
                  height="200"
                />
                <v-card-text>
                  <v-checkbox
                    v-model="selected"
                    value="course"
                    label="Course"
                    hide-details
                    selected-color="red"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>

          <br />

          <div class="text-center">
            <v-btn
              color="success"
              dark
              xs10 md6
              class="mx-auto align-center"
              @click="addSport"
            >Ajouter les sports sélectionnés</v-btn>
          </div>

          <v-snackbar v-model="snackbar">
            Ta sélection de sport a été sauvegardée !
            <v-btn color="teal" text @click="snackbar = false">Fermer</v-btn>
          </v-snackbar>

          <br />
          <v-divider inset width="80%" class="mx-auto"></v-divider>
          <br />

          <div class="text-center" justify="center" align="center">
            <v-card flat width="40%" class="mx-auto">
              <h3
                class="ps-4 font-weight-thin headline mx-auto"
              >J'ai décidé d'être heureux car c'est bon pour la santé.</h3>
              <h5 class="overline">Voltaire</h5>

              <v-img
                src="https://i.pinimg.com/564x/df/8f/ef/df8fef88fba55c4b3b6b31f01174b446.jpg"
                alt="imageMignonne"
                xs8
                md3
                class="align-center justify-center mx-auto"
              />
            </v-card>
          </div>
        </v-tab-item>

        <!-- SOMMEIL -->
        <v-tab>Sommeil</v-tab>

        <v-tab-item>
          <br />
          <v-layout wrap class="mx-auto align-center justify-center">
            <v-flex xs12 md7>
              <v-card class="mt-4 mx-auto" xs12 max-width="800">
                <v-sheet
                  class="v-sheet--offset mx-auto"
                  color="cyan"
                  elevation="12"
                  max-width="calc(100% - 32px)"
                >
                  <v-sparkline
                    :labels="labels"
                    :value="heures"
                    color="white"
                    line-width="2"
                    padding="16"
                  ></v-sparkline>
                </v-sheet>

                <v-card-text class="pt-0">
                  <br />

                  <span class="title font-weight-light mb-2">Détails concernant ta dernière nuit.</span>
                  <br />
                  <span
                    class="subheading font-weight-light grey--text"
                  >Environ 3h de sommeil profond !</span>

                  <v-divider class="my-2"></v-divider>

                  <v-icon class="mr-2" small>mdi-clock</v-icon>

                  <span class="caption grey--text font-weight-light">Dernière mise à jour à 08h03.</span>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>

          <br />
          <v-divider inset width="80%"></v-divider>
          <br />

          <v-layout wrap class="mx-auto align-center justify-center">
            <v-flex xs12 md7>
              <v-card flat>
                <v-list>
                  <v-form>
                  <v-container>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-img 
                          src='https://image.flaticon.com/icons/svg/2372/2372731.svg'
                          alt='information'
                          width='75'
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
                              v-model="selectedQualite"
                              :items="sommeilQualite"
                              label="As-tu bien dormi ?"
                              solo
                            ></v-select>
                            </v-col>
                          </v-row>
                      </v-list-item-content>  
                    </v-list-item> 

                    <br />

                    <v-list-item>
                      <v-list-item-icon>
                        <v-img 
                          src='https://image.flaticon.com/icons/png/512/148/148855.png'
                          alt='information'
                          width='75'
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
                                v-model="selectedQuantite"
                                :items="sommeilQuantite"
                                label="As-tu suffisamment dormi ?"
                                solo
                               ></v-select>
                            </v-col>
                          </v-row>
                      </v-list-item-content>  
                    </v-list-item>
                  </v-container>
                  </v-form>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>

          <div class="text-center">
            <v-btn
              color="success"
              dark
              xs10 md6
              class="mx-auto align-center"
              @click="addSommeil"
            >Ajouter ma sélection</v-btn>
          </div>

          <br />

          <v-snackbar v-model="snackbar2">
            La qualité de ton sommeil a été sauvegardée !
            <v-btn color="teal" text @click="snackbar2 = false">Fermer</v-btn>
          </v-snackbar>
        </v-tab-item>

        <!-- HUMEUR -->
        <v-tab>Humeur</v-tab>

        <v-tab-item>
          <br />
          <h2 class="ps-4 ma-2 font-weight-thin headline">COMMENT TE SENS-TU, AUJOURD'HUI ?</h2>
          <br />

          <v-layout row wrap class="mx-auto align-center justify-center">
            <v-spacer class="d-none d-sm-flex"></v-spacer>
            <v-spacer></v-spacer>
            <v-flex xs5 md1>
              <v-card class="mx-auto" flat>
                <v-img
                  alt="heureux"
                  src="https://cdn.icon-icons.com/icons2/2000/PNG/128/blush_emoji_shy_icon_123388.png"
                  class="mx-auto align-center justify-center"
                />
                <v-card-text class="mx-auto align-center justify-center">
                  <v-switch
                    v-model="selectedHumeur"
                    value="heureux"
                    label="Heureux/se"
                    hide-details
                    inset 
                  ></v-switch>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs5 md1>
              <v-card class="mx-auto" flat>
                <v-img
                  alt="triste"
                  src="https://cdn.icon-icons.com/icons2/2000/PNG/128/crying_emoji_sad_icon_123390.png"
                  class="mx-auto align-center justify-center"
                />
                <v-card-text>
                  <v-switch
                    v-model="selectedHumeur"
                    value="triste"
                    label="Triste"
                    hide-details
                    inset 
                  ></v-switch>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs5 md1>
              <v-card class="mx-auto" flat>
                <v-img
                  alt="jovial"
                  src="https://cdn.icon-icons.com/icons2/2000/PNG/128/happy_smiley_icon_123391.png"
                  class="mx-auto align-center justify-center"
                />
                <v-card-text>
                  <v-switch
                    v-model="selectedHumeur"
                    value="jovial"
                    label="Jovial(e)"
                    hide-details
                    inset 
                  ></v-switch>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs5 md1>
              <v-card class="mx-auto" flat>
                <v-img
                  alt="deprime"
                  src="https://cdn.icon-icons.com/icons2/2000/PNG/128/emoji_think_thinking_icon_123403.png"
                  class="mx-auto align-center justify-center"
                />
                <v-card-text>
                  <v-switch
                    v-model="selectedHumeur"
                    value="deprime"
                    label="Déprimé(e)"
                    hide-details
                    inset 
                  ></v-switch>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs5 md1>
              <v-card class="mx-auto" flat>
                <v-img
                  alt="fatigue"
                  src="https://cdn.icon-icons.com/icons2/2000/PNG/128/emoji_sleep_sleeping_icon_123401.png"
                  class="mx-auto align-center justify-center"
                />
                <v-card-text>
                  <v-switch
                    v-model="selectedHumeur"
                    value="fatigue"
                    label="Fatigué(e)"
                    hide-details
                    inset 
                  ></v-switch>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs5 md1>
              <v-card class="mx-auto" flat>
                <v-img
                  alt="dynamique"
                  src="https://cdn.icon-icons.com/icons2/2000/PNG/128/cool_smiley_sunglasses_icon_123402.png"
                  class="mx-auto align-center justify-center"
                />
                <v-card-text>
                  <v-switch
                    v-model="selectedHumeur"
                    value="dynamique"
                    label="Dynamique"
                    hide-details
                    inset 
                  ></v-switch>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-spacer class="d-none d-sm-flex"></v-spacer>
            <v-spacer></v-spacer>
          </v-layout>
          <br />
          <br />

          <div class="text-center">
            <v-btn
              color="success"
              dark
              xs10 md6
              class="mx-auto align-center"
              @click="addMood"
            >Ajouter ma sélection</v-btn>
          </div>

          <br />

          <v-snackbar v-model="snackbar3">
            Ton humeur du jour a été sauvegardée !
            <v-btn color="teal" text @click="snackbar3 = false">Fermer</v-btn>
          </v-snackbar>

          <v-divider width="80%" class="mx-auto"></v-divider>
          <br />

          <v-card width="85%" flat class="mx-auto" v-show="selectedHumeur=='heureux' || selectedHumeur=='jovial' || selectedHumeur=='dynamique'">
            <h2
              class="ps-4 ma-2 font-weight-thin headline"
              align="center"
            >En fonction de ton humeur, voici quelques films que tu pourrais regarder !</h2>
            <br />

            <v-row>
              <v-img
                v-for="(item, i) in films1"
                :key="i"
                :src="item.src"
                alt="films"
                width="25%"
              ></v-img>
            </v-row>
          </v-card>
          <v-card width="85%" flat class="mx-auto" v-show="selectedHumeur=='triste' || selectedHumeur=='deprime' || selectedHumeur=='fatigue'">
            <h2
              class="ps-4 ma-2 font-weight-thin headline"
              align="center"
            >En fonction de ton humeur, voici quelques films que tu pourrais regarder !</h2>
            <br />

            <v-row>
              <v-img
                v-for="(item, i) in films2"
                :key="i"
                :src="item.src"
                alt="films"
                width="25%"
              ></v-img>
            </v-row>
          </v-card>
          <br />

          <v-card class="d-flex mb-6" color="teal lighten-4">
            <v-row justify="center">
              <h2 class="ps-4 ma-2 font-weight-thin headline">
                Si malgré tout, tu n'as pas le moral, tu n'es pas seul(e).
                <br />Voici, dans le doute, une liste de professionnels à contacter en cas de besoin.
                <br />
                <a
                  href="https://sante.lefigaro.fr/tags/professionnels-sante"
                  class="font-weight-black teal--text"
                >Clique ici !</a>
              </h2>
            </v-row>
          </v-card>
          <br />
        </v-tab-item>
      </v-tabs>

      <!--Barre de fin de page -->
      <v-card class="overflow-hidden mx-auto" height="50px" >
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
    <!--Fin de div pour les utilisateurs connectés-->
  </v-content>
</template>


<script >
import { mapGetters } from "vuex";
import firebase from "firebase";
//import Chart from "chart.js";
import { firestore } from "../main";

//Pour afficher la date du jour, avec le jour de la semaine//
var jours = new Array(
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
);
var mois = new Array(
  "janvier",
  "févrirer",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "octobre",
  "novembre",
  "décembre"
);
var date = new Date();
var date_today = jours[date.getDay()] + " "; //Nom du jour de la semaine
date_today += date.getDate() + " "; //Numéro du jour
date_today += mois[date.getMonth()] + " "; //Mois
date_today += date.getFullYear(); //Année

const exhale = ms => new Promise(resolve => setTimeout(resolve, ms));

//NOMBRE DE PAS
var objectifPas = 10000;
var nbPasCourant = 5482;

export default {
  name: "Dashboard",

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
            name: "dashboard"
          });
        });
    },

    heartbeat() {
      return Math.ceil(Math.random() * (120 - 80) + 80);
    },

    async takePulse(inhale = true) {
      this.checking = true;
      inhale && (await exhale(1000));
      this.bpm = Array.from({ length: 20 }, this.heartbeat);
      this.checking = false;
    },

    created() {
      this.takePulse(false);
    },

    addWater: function() {
      this.$firestore.usersData
        .doc(this.utilisateur.displayName)
        .update({
          eau: this.eauAjout.match(/\d+/g).join('')
        })
        .then((this.snackbarEau = true));
    },

    addCalories: function() {
      this.$firestore.usersData
        .doc(this.utilisateur.displayName)
        .update({
          calories: this.caloriesAjout.match(/\d+/g).join('')
        })
        .then((this.snackbarCalories = true));
    },

    addTempsPerso: function() {
      this.$firestore.usersData
        .doc(this.utilisateur.displayName)
        .update({
          tempsPerso: this.tempsPersoAjout.match(/\d+/g).join('')
        })
        .then((this.snackbarPerso = true));
    },

    addSport: function() {
      this.$firestore.usersData
        .doc(this.utilisateur.displayName)
        .update({
          sport: this.selected
        })
        .then((this.snackbar = true));
    },

    addSommeil: function() {
      this.$firestore.usersData
        .doc(this.utilisateur.displayName)
        .update({
          sommeilQualite: this.selectedQualite,
          sommeilQuantite: this.selectedQuantite
        })
        .then((this.snackbar2 = true));
    },

    addMood: function() {
      this.$firestore.usersData
        .doc(this.utilisateur.displayName)
        .update({
          humeurJour: this.selectedHumeur,
        })
        .then((this.snackbar3 = true));
    },
  },

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    }),
    avg() {
      const sum = this.bpm.reduce((acc, cur) => acc + cur, 0);
      const length = this.bpm.length;
      if (!sum && !length) return 0;
      return Math.ceil(sum / length);
    }
  },

  data() {
    return {
      usersData: [],
      ownData: [],

      utilisateur:firebase.auth().currentUser,

      nbPasCourant,
      nbPasRestant: objectifPas - nbPasCourant,
      value: (nbPasCourant * 100) / objectifPas, // pas réalisés par rapport à l'objectif fixé par la personne

      date: date_today.toUpperCase(),
      checking: false,
      bpm: [],
      eau: 70, //eau consommé selon l'objectif de la personne, valeur fixe

      ajoutEau: false,
      ajoutNourriture: false,
      ajoutTemps: false,

      //Formulaire - Eau
      eauAjout: '',
      snackbarEau: false,
      //Formulaire - Calories
      caloriesAjout: '',
      snackbarCalories: false,
      //Formulaire - Temps personnel
      tempsPersoAjout: '',
      snackbarPerso: false,

      //Formulaire - Sport
      selected: [],
      snackbar: false,
      //Formulaire - Sommeil
      selectedQualite: [],
      selectedQuantite: [],
      snackbar2: false,
      //Formulaire - Humeur
      selectedHumeur: "",
      snackbar3: false,

      //Films en fonction de l'humeur
      films1: [ //Lorsque la personne est joviale, heureuse ou dynamique
        {src:"https://fr.web.img3.acsta.net/pictures/15/04/14/18/30/215297.jpg"},
        {src:"https://fr.web.img6.acsta.net/medias/nmedia/18/88/95/51/20264212.jpg"},
        {src:"https://fr.web.img4.acsta.net/pictures/15/01/08/15/02/290347.jpg"},
        {src:"https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg"}
      ],

      films2: [ //Lorsque la personne est triste, déprimée ou fatiguée
        {src:"https://i.pinimg.com/564x/b9/d0/4e/b9d04ecb6a3b8a9343f4f84095bf5185.jpg"},
        {src:"https://img.over-blog-kiwi.com/0/99/46/17/20170717/ob_b1a566_zootopia.jpg"},
        {src:"https://fr.web.img2.acsta.net/pictures/17/03/02/10/13/106609.jpg"},
        {src:"https://fr.web.img2.acsta.net/pictures/19/05/03/14/30/1132544.jpg"}
      ],

      //Modification des quantités d'eau
      itemsEau: [
        { text: "1 verre" },
        { text: "2 verres" },
        { text: "3 verres" },
        { text: "4 verres" },
        { text: "5 verres" },
        { text: "6 verres" },
        { text: "7 verres" },
        { text: "8 verres" },
        { text: "9 verres" },
        { text: "10 verres" },
        { text: "11 verres" },
        { text: "12 verres" },
        { text: "13 verres" },
        { text: "14 verres" },
        { text: "15 verres" },
      ],

      //Modifications des calories
      itemsNourriture: [
        { text: "50 calories" },
        { text: "100 calories" },
        { text: "150 calories" },
        { text: "200 calories" },
        { text: "250 calories" },
        { text: "300 calories" },
        { text: "350 calories" },
        { text: "400 calories" },
        { text: "450 calories" },
        { text: "500 calories" },
        { text: "550 calories" },
        { text: "600 calories" },
        { text: "650 calories" },
        { text: "700 calories" },
        { text: "750 calories" },
        { text: "800 calories" },
        { text: "850 calories" },
        { text: "900 calories" },
        { text: "950 calories" },
        { text: "1000 calories" }
      ],

      //Modifications du temps personnel
      itemsTemps: [
        { text: "5 minutes" },
        { text: "10 minutes" },
        { text: "15 minutes" },
        { text: "20 minutes" },
        { text: "25 minutes" },
        { text: "30 minutes" },
        { text: "35 minutes" },
        { text: "40 minutes" },
        { text: "45 minutes" },
        { text: "50 minutes" },
        { text: "55 minutes" },
        { text: "1 heure" }
      ],

      labels: [
        "21h00",
        "00h00",
        "03h00",
        "04h00",
        "05h00",
        "06h00",
        "07h00",
        "08h00"
      ],

      heures: [200, 675, 310, 390, 610, 260, 250, 140],

      sommeilQualite: [
          'Très bien',
          'Bien',
          'Mal',
          'Très mal',
        ],
      
      sommeilQuantite: [
        'Beaucoup dormi',
        'Suffisamment dormi',
        'Pas assez dormi',
      ]
    };
  }
};
</script>
