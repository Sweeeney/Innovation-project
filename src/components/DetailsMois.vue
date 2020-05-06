<template>
    <v-content>
      <header>
        <div v-if="user.loggedIn"> 
          <v-row> 
            <v-col class="text-left">
                <v-row>
                    <v-btn to="/historical" text=true> 
                      <v-icon right>mdi-chevron-left</v-icon>
                    </v-btn>
                    <h2 class="ps-4 ma-2 font-weight-thin headline"> MOIS DE {{date_du_mois}} </h2>
                </v-row>
            </v-col>
            <v-col class="text-right">
              <v-btn tile large class="ma-2" color="teal lighten-4" @click.prevent="signOut">Déconnexion</v-btn>
            </v-col>
          </v-row>
        </div>
        <div v-else>
          <v-row>
            <v-icon right>mdi-chevron-right</v-icon> 
            <v-col class="text-left">
                    <v-row>
                        <v-btn to="/historical" text=true> 
                        <v-icon right>mdi-chevron-left</v-icon>
                        </v-btn>
                        <h2 class="ps-4 ma-2 font-weight-thin headline"> MOIS DE {{date_du_mois}} </h2>
                    </v-row>
            </v-col>
            <v-col class="text-right">
              <v-btn tile large class="ma-2" color="teal lighten-4" to="/signin">Connexion</v-btn>
              <v-btn tile large class="ma-2" color="teal lighten-4" to="/signup">Inscription</v-btn>
            </v-col>
          </v-row>
        </div>
      </header>

      <v-toolbar d-flex>
        <v-tabs
            background-color="teal lighten-5"
            grow
            light           
        >
            <v-tabs-slider color="teal darken-2"></v-tabs-slider>

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
                    <div v-if="item.content=='general'" class="text-center">
                        <v-container fluid>
                            <v-row>
                                <v-col class="text-left">
                                    <h2 class="display-0 font-weight-thin"> MON HUMEUR </h2>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-row justify='space-around'>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-progress-circular
                                                    :value="60"
                                                    color="orange darken-1"
                                                    size=120
                                                    width=10
                                                ></v-progress-circular>
                                                <div>Dynamique</div>
                                            </v-col>
                                        </v-card>
                                        <v-card 
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-progress-circular
                                                    :value="45"
                                                    color="light-green lighten-1"
                                                    size=120
                                                    width=10
                                                ></v-progress-circular>
                                                <div>Jovial</div>
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-progress-circular
                                                    :value="15"
                                                    color="yellow darken-2"
                                                    size=120
                                                    width=10
                                                ></v-progress-circular>
                                                <div>Heureux</div>
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-progress-circular
                                                    :value="15"
                                                    color="brown lighten-1"
                                                    size=120
                                                    width=10
                                                ></v-progress-circular>
                                                <div>Fatigué</div>
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-progress-circular
                                                    :value="5"
                                                    color="blue darken-2"
                                                    size=120
                                                    width=10
                                                ></v-progress-circular>
                                                <div>Triste</div>
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-progress-circular
                                                    :value="5"
                                                    color="grey lighten-1"
                                                    size=120
                                                    width=10
                                                ></v-progress-circular>
                                                <div>Déprimé</div>
                                            </v-col>
                                        </v-card>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-container fluid>
                            <v-row>
                                <v-col class="text-left">
                                    <h2 class="display-0 font-weight-thin"> MON INDICE DE MASSE CORPORELLE </h2>
                                </v-col>
                            </v-row>
                            <v-row>
                                    <h4 class="ps-4 ma-2 display-0 font-weight-thin"> MON POIDS : 62 KG</h4>

                                    <h4 class="ps-4 ma-2 display-0 font-weight-thin"> MA TAILLE : 1M68</h4>


                                    <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <span v-on="on">
                                        <h4 class="ps-4 ma-2 display-0 font-weight-thin"> IMC : 21,97</h4>
                                        </span>
                                    </template>
                                    <span>IMC : Indice de Masse Corporelle</span>
                                    <span><br>poids (kg) divisé par la taille (m) au carré</span>
                                    </v-tooltip>


                                    

                            </v-row>
                        </v-container>
                        <v-container fluid>
                            <v-row>
                                <v-col class="text-left">
                                    <h2 class="display-0 font-weight-thin"> LIENS </h2>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-row justify='space-around'>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=1
                                        width=225
                                        >
                                            <v-img
                                            src="https://static.fnac-static.com/multimedia/Images/FR/NR/10/29/2d/2959632/1540-1/tsp20180813160226/Reflechiez-et-devenez-riche.jpg"
                                                >
                                            </v-img>
                                            <v-card-subtitle class="pb-0">Réfléchissez et devenez riche</v-card-subtitle>
                                            <v-card-text class="text--primary">
                                                <div>Napoleon Hill</div>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-btn color="orange" text>
                                                    Consulter
                                                </v-btn>
                                                <v-btn color="orange" text>
                                                    Acheter
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=1
                                        width=225
                                        >
                                            <v-img
                                            src="https://static.fnac-static.com/multimedia/Images/FR/NR/b7/56/2b/2840247/1540-0/tsp20191018073110/Le-pouvoir-du-moment-present.jpg"
                                                >
                                            </v-img>
                                            <v-card-subtitle class="pb-0">Le pouvoir du moment présent</v-card-subtitle>
                                            <v-card-text class="text--primary">
                                                <div>Eckhart Tolle</div>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-btn color="orange" text >
                                                    Consulter
                                                </v-btn>
                                                <v-btn color="orange" text >
                                                    Acheter
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=1
                                        width=225
                                        >
                                            <v-img
                                            src="https://static.fnac-static.com/multimedia/Images/FR/NR/46/5b/b1/11623238/1540-1/tsp20200222071856/Les-Antiseches-du-Bonheur.jpg"
                                                >
                                            </v-img>
                                            <v-card-subtitle class="pb-0">Les antisèches du bonheur</v-card-subtitle>
                                            <v-card-text class="text--primary">
                                                <div>Jonathan Lehmann</div>
                                            </v-card-text>
                                            <v-card-actions>
                                            <v-btn color="orange" text >
                                                Consulter
                                            </v-btn>
                                            <v-btn color="orange" text >
                                                Acheter
                                            </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-container fluid>
                            <v-row>
                                <v-col class="text-left">
                                    <h2 class="display-0 font-weight-thin"> CITATIONS </h2>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-row justify='space-around'>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=1
                                        width=300
                                        >
                                            <v-img
                                            src="https://i.pinimg.com/736x/83/1b/6d/831b6db997dcde1ad190d6e456bb6062.jpg"
                                                >
                                            </v-img>
                                        </v-card>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>

                    <div v-if="item.content=='sommeil'" class="text-center">
                        <v-container fluid>
                            <v-row>
                                <v-col>
                                    <v-row justify='space-around'>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        width=350
                                        >
                                            <v-col>
                                                <v-sparkline
                                                    :value="value"
                                                    :gradient="gradient"
                                                    :smooth="radius || false"
                                                    :line-width="width"
                                                    :stroke-linecap="lineCap"
                                                    :gradient-direction="gradientDirection"
                                                    :fill="fill"
                                                    :type="type"
                                                    :auto-line-width="autoLineWidth"
                                                    :labels="label"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-card-title>Heures de sommeil</v-card-title>
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        width=350
                                        >
                                            <v-col>
                                                <v-sparkline
                                                    :value="value2"
                                                    :gradient="gradient"
                                                    :smooth="radius || false"
                                                    :line-width="width"
                                                    :stroke-linecap="lineCap"
                                                    :gradient-direction="gradientDirection"
                                                    :fill="fill"
                                                    :type="type"
                                                    :auto-line-width="autoLineWidth"
                                                    :labels="label"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-card-title>Qualité de mon sommeil</v-card-title>
                                                <v-card-text>
                                                    Un très bon sommeil vous amènera vers le bleu
                                                    alors qu'un sommeil agité sera affiché en rouge
                                                </v-card-text>
                                            </v-col>
                                        </v-card>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>

                    <div v-if="item.content=='alimentation'" class="text-center">
                        <v-container fluid>
                            <v-row>
                                <v-col class="text-left">
                                    <h2 class="display-0 font-weight-thin"> MA CONSOMMATION D'EAU </h2>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-row justify='space-around'>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-progress-circular
                                                :rotate="180"
                                                :size="160"
                                                :width="20"
                                                :value=65
                                                color="cyan accent-3"
                                                >
                                                    <v-img width=70
                                                    src="https://static.berceaumagique.com/photo/dc/11/121244/400/1/jouet-de-bain-arroseur-goutte-d-eau.jpg"
                                                    >
                                                    </v-img>
                                                </v-progress-circular>
                                                <h3 class="display-0 font-weight-thin">Vous y êtes presque !</h3>
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Conseil du jour :</h3>
                                                <h4 class="display-0 font-weight-thin"><br>pour boire plus, essayez de boire à la paille</h4>
                                            </v-col>
                                        </v-card>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                        <div v-if="isMobile()">
                            <mobile>
                            <v-container fluid>
                                <v-row>
                                    <v-col class="text-left">
                                        <h2 class="display-0 font-weight-thin"> MA NOURRITURE </h2>
                                        <h3 class="display-0 font-weight-thin"> Ma consommation par rapport aux apports nutritionnels conseillés : </h3>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Energie</h3>
                                            </v-col>
                                        </v-row>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <v-progress-linear
                                                height="25"
                                                v-model="valueDeterminate"
                                                color=deep-orange accent-2
                                                >
                                                </v-progress-linear>
                                            </v-col>
                                            <v-col d-flex>
                                                75%
                                            </v-col>
                                        </v-row>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Protéines</h3>
                                            </v-col>
                                        </v-row>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <v-progress-linear
                                                v-model="valueDeterminate2"
                                                height="25"
                                                color=brown darken-2
                                                >
                                                </v-progress-linear>
                                            </v-col>
                                            <v-col d-flex>
                                                60%
                                            </v-col>
                                        </v-row>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Glucides</h3>
                                            </v-col>
                                        </v-row>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <v-progress-linear
                                                height="25"
                                                v-model="valueDeterminate3"
                                                color=amber accent-3
                                                >
                                                </v-progress-linear>
                                            </v-col>
                                            <v-col d-flex>
                                                40%
                                            </v-col>
                                        </v-row>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Lipides</h3>
                                            </v-col>
                                        </v-row>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <v-progress-linear
                                                height="25"
                                                color=pink lighten-2
                                                v-model="valueDeterminate4"
                                                >
                                                </v-progress-linear>
                                            </v-col>
                                            <v-col d-flex>
                                                90%
                                            </v-col>
                                        </v-row>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Vitamines</h3>
                                            </v-col>
                                        </v-row>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <v-progress-linear
                                                height="25"
                                                v-model="valueDeterminate5"
                                                color=green accent-4
                                                >
                                                </v-progress-linear>
                                            </v-col>
                                            <v-col d-flex>
                                                70%
                                            </v-col>
                                        </v-row>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Minéraux</h3>
                                            </v-col>
                                        </v-row>
                                        <v-row d-flex justify='space-around'>
                                            <v-col d-flex>
                                                <v-progress-linear
                                                height="25"
                                                v-model="valueDeterminate6"
                                                color=blue-grey darken-1
                                                >
                                                </v-progress-linear>
                                            </v-col>
                                            <v-col d-flex>
                                                80%
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                            </mobile>
                        </div>
                        <div v-else>
                            <desktop>
                            <v-container fluid>
                                <v-row>
                                    <v-col class="text-left">
                                        <h2 class="display-0 font-weight-thin"> MA NOURRITURE </h2>
                                        <h3 class="display-0 font-weight-thin"> Ma consommation par rapport aux apports nutritionnels conseillés : </h3>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                                <v-col d-flex>
                                                    <h3 class="display-0 font-weight-thin">Energie</h3>
                                                </v-col>
                                                <v-col d-flex>
                                                    <v-progress-linear
                                                    height="25"
                                                    v-model="valueDeterminate"
                                                    color=deep-orange accent-2
                                                    >
                                                    </v-progress-linear>
                                                </v-col>
                                                <v-col d-flex>
                                                    75%
                                                </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Protéines</h3>
                                            </v-col>
                                            <v-col d-flex>
                                                <v-progress-linear
                                                v-model="valueDeterminate2"
                                                height="25"
                                                color=brown darken-2
                                                >
                                                </v-progress-linear>
                                            </v-col>
                                            <v-col d-flex>
                                                60%
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Glucides</h3>
                                            </v-col>
                                            <v-col d-flex>
                                                <v-progress-linear
                                                height="25"
                                                v-model="valueDeterminate3"
                                                color=amber accent-3
                                                >
                                                </v-progress-linear>
                                            </v-col>
                                            <v-col d-flex>
                                                40%
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Lipides</h3>
                                            </v-col>
                                            <v-col d-flex>
                                                <v-progress-linear
                                                height="25"
                                                color=pink lighten-2
                                                v-model="valueDeterminate4"
                                                >
                                                </v-progress-linear>
                                            </v-col>
                                            <v-col d-flex>
                                                90%
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Vitamines</h3>
                                            </v-col>
                                            <v-col d-flex>
                                                <v-progress-linear
                                                height="25"
                                                v-model="valueDeterminate5"
                                                color=green accent-4
                                                >
                                                </v-progress-linear>
                                            </v-col>
                                            <v-col d-flex>
                                                70%
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col d-flex>
                                                <h3 class="display-0 font-weight-thin">Minéraux</h3>
                                            </v-col>
                                            <v-col d-flex>
                                                <v-progress-linear
                                                height="25"
                                                v-model="valueDeterminate6"
                                                color=blue-grey darken-1
                                                >
                                                </v-progress-linear>
                                            </v-col>
                                            <v-col d-flex>
                                                80%
                                            </v-col>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                            </desktop>
                        </div>
                        <v-container fluid>
                            <v-row>
                                <v-col class="text-left">
                                    <h2 class="display-0 font-weight-thin"> ARTICLES </h2>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-row justify='space-around'>
                                        <v-card
                                        class="d-flex flex-wrap pa-2 text-justify"
                                        elevation=1
                                        width=350
                                        >
                                            <v-col>
                                                <v-card-title>
                                                    <div>Alimentation et Santé :</div>
                                                    <div>la Science et l'imaginaire</div>
                                                </v-card-title>
                                                <v-card-subtitle>
                                                    Annie Hubert
                                                </v-card-subtitle>
                                                <v-card-text>
                                                    L’alimentation a été pour les hommes, dans toutes les 
                                                    cultures, un support important de l’imaginaire à travers 
                                                    lequel se cristallisent angoisses et espoirs. La 
                                                    naissance de la science de la nutrition n’a rien fait 
                                                    pour changer cet état des choses. (...) 
                                                </v-card-text>
                                            </v-col>
                                        </v-card>   
                                        <v-card
                                        class="d-flex flex-wrap pa-2 text-justify"
                                        elevation=1
                                        width=350
                                        >
                                            <v-col>
                                                <v-card-title>
                                                    Alimentation et vieillissement
                                                </v-card-title>
                                                <v-card-subtitle>
                                                    Guylaine Ferland
                                                </v-card-subtitle>
                                                <v-card-text>
                                                    Une bonne alimentation peut-elle nous aider à mieux 
                                                    vieillir ? La recherche menée au cours des quarante 
                                                    dernières années nous incite fortement à le croire. 
                                                    En effet, un nombre important de travaux indiquent 
                                                    qu’une alimentation variée et équilibrée favorise (...)
                                                </v-card-text>
                                            </v-col>
                                        </v-card>    
                                        <v-card
                                        class="d-flex flex-wrap pa-2 text-justify"
                                        elevation=1
                                        width=350
                                        >
                                            <v-col>
                                                <v-card-title>
                                                    <div>Les bienfaits de l'alimentation </div>
                                                    <div>vivante : règles, conseils et </div>
                                                    <div>recettes pour retrouver son </div>
                                                    <div> énergie</div>
                                                </v-card-title>
                                                <v-card-subtitle>
                                                    Nelly Grosjean
                                                </v-card-subtitle>
                                                <v-card-text>
                                                    L'alimentation est dite "vivante" lorsqu'elle est crue, 
                                                    végétale et naturelle, indemne de toute transformation. 
                                                    Pourquoi changer sa manière de manger et comment 
                                                    procéder ? De la cure détox à la gastronomie aromatique, 
                                                    en passant par des recettes simples et rapides au (...)
                                                </v-card-text>
                                            </v-col>
                                        </v-card>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>

                    <div v-if="item.content=='sport'" class="text-center">
                        <v-container fluid>
                            <v-row>
                                <v-col class="text-left">
                                    <h2 class="display-0 font-weight-thin"> MON ACTIVITE </h2>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-row justify='space-around'>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-list-item>
                                                    <v-list-item-avatar>
                                                        <v-img
                                                            src="https://www.anafagc.fr/img/ArticleImage/46/2e/9e/e8ceac1024a04f3a94a0a4967fe8154a/traces-de-pas-2.7e36a7a5.jpg"
                                                        >
                                                    </v-img>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <h3 class="display-0 font-weight-thin">Nombre de pas :</h3>
                                                        <h3 class="display-0 font-weight-thin">150 000 pas</h3>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-list-item>
                                                    <v-list-item-avatar>
                                                        <v-img
                                                            src="https://www.flaticon.com/premium-icon/icons/svg/1951/1951578.svg"
                                                        >
                                                    </v-img>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <h3 class="display-0 font-weight-thin">Calories brûlées :</h3>
                                                        <h3 class="display-0 font-weight-thin">30 000 kcal</h3>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-list-item>
                                                    <v-list-item-avatar>
                                                        <v-img
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ27vjs7A-tUwhBZE8qN8iSf8i2kB29t_8crQo9Gg2_EGDVyadP&usqp=CAU"
                                                        >
                                                    </v-img>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <h3 class="display-0 font-weight-thin">Activité du mois :</h3>
                                                        <h3 class="display-0 font-weight-thin">23 heures</h3>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-col>
                                        </v-card>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-container fluid>
                            <v-row>
                                <v-col class="text-left">
                                    <h2 class="display-0 font-weight-thin"> MON OBJECTIF </h2>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-row justify='space-around'>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-progress-circular
                                                :rotate="180"
                                                :size="160"
                                                :width="20"
                                                :value=90
                                                color="red lighten-2"
                                                >
                                                90%
                                                </v-progress-circular>
                                            </v-col>
                                        </v-card>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-container fluid>
                            <v-row>
                                <v-col class="text-left">
                                    <h2 class="display-0 font-weight-thin"> MES SPORTS PREFERES </h2>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-row justify='space-around'>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-img width=150
                                                src="https://i.pinimg.com/474x/02/1c/6a/021c6afcee43dfbc7adad71735b7ae11.jpg"
                                                >
                                                </v-img>
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-img width=150
                                                src="https://i.pinimg.com/474x/98/9a/c9/989ac964509dcc2254ad5f9624c6e728.jpg"
                                                >
                                                </v-img>
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-img width=150
                                                src="https://i.pinimg.com/474x/9a/68/b1/9a68b14ec109942f74848dee08bf2209.jpg"
                                                >
                                                </v-img>
                                            </v-col>
                                        </v-card>
                                        <v-card
                                        class="d-flex flex-wrap pa-2"
                                        elevation=0
                                        >
                                            <v-col>
                                                <v-img width=150
                                                src="https://i.pinimg.com/474x/3b/96/bf/3b96bfd3cbef44077ce42aa7378d58c9.jpg"
                                                >
                                                </v-img>
                                            </v-col>
                                        </v-card>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                            
                </v-content>
            </v-tab-item>
        </v-tabs>
      </v-toolbar>
      <v-container style="height: 2500px;"></v-container>
  </v-content>
</template>


<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import moment from 'moment';

moment.locale('fr');

const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

export default {
    name:'DetailsMois',
    props: {
        date: Date
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
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
        } else {
            return false
        }
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
            tab: null,
            items: [
                { tab: 'Général', content: 'general' },
                { tab: 'Sommeil', content: 'sommeil' },
                { tab: 'Alimentation', content: 'alimentation' },
                { tab: 'Sport', content: 'sport' },
            ],

            date_du_mois : (moment(this.date).format('MMMM YYYY')).toUpperCase(),

            width: 'auto',
            radius: 8,
            padding: 2,
            lineCap: 'round',
            gradient: gradients[5],
            value: [6, 4, 7, 6, 10, 5, 8, 7, 6, 9, 5, 7, 7, 8, 6],
            value2: [3, 0, 3, 2, 4, 3, 4, 1, 1, 3, 2, 4, 1, 3, 2],
            label:[1,2,4,5,7,10,11,13,14,20,21,23,26,28,30],
            gradientDirection: 'bottom',
            gradients,
            fill: false,
            type: 'trend',
            autoLineWidth: false,

            valueDeterminate: 75,
            valueDeterminate2: 60,
            valueDeterminate3: 40,
            valueDeterminate4: 90,
            valueDeterminate5: 70,
            valueDeterminate6: 80,
        }
    }
}
</script>