<template>
  <v-content>
      <header>
        <v-row align="right">
            <v-col class="text-right">
            <div> 
                <v-btn tile large class="ma-2" color="teal lighten-4" to="/signin">Connexion</v-btn>
                <v-btn tile large class="ma-2" color="teal lighten-4" to="/signup">Inscription</v-btn>
            </div>
            </v-col>
        </v-row>
      </header>

    <v-card flat>
      <h2 class="display-1 font-weight-thin pl-4 ma-2"> ACTUALITÉS </h2>

      <v-container fluid align="center" >
        <v-row dense >
          <v-card d-flex width="80%">
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

          <v-card d-flex width="20%" height="400">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="display-1">Nancy</v-list-item-title>
                <v-list-item-subtitle class="headline">Ensoleillé</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-text>
              <v-row>
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
                    width="150"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-card>  

    <br>
    <v-divider></v-divider>
    <br>

    <div>
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
    </div>
  </v-content>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        slides: [
          {
            src: 'https://www.hdwallpapers.net/previews/dew-drops-on-dandelion-seeds-705.jpg',
          },
          {
            src :'https://www.hdwallpapers.net/previews/reflection-polyscape-1085.jpg',
          },
          {
            src :'https://www.hdwallpapers.net/previews/peacock-1162.jpg',
          },
          {
            src :'https://www.hdwallpapers.net/previews/lake-prags-italy-1053.jpg',
          },
          {
            src :'https://www.hdwallpapers.net/previews/starry-night-over-cape-cod-1126.jpg',
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
    }
  }
</script>
