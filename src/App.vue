<template>
    <v-app>
    <!-- BAR D'APPLICATION -->
    <v-app-bar
      app
      permanent
      color="teal darken-2"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://image.flaticon.com/icons/svg/387/387615.svg"
          transition="scale-transition"
          width="40"
        />
        <h2>
          <router-link to="/home" class="router-link">Healthink</router-link>
        </h2>
      </div>

      <v-spacer></v-spacer>
      <!-- MENU BURGER -->
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            icon
            v-on="on"
          >
          <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link" 
            link
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
      return {
        items: [
          { title: 'Accueil', icon: 'mdi-home', link: '/home' },
          { title: 'Historique', icon: 'mdi-calendar-multiple', link: '/historical' },
          { title: 'Paramètres', icon: 'mdi-cogs', link: '/parameters' },
        ],
        right: null,
      }
    },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.router-link {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

a,
a.router-link-exact-active.router-link-active {
  text-decoration: none !important;
  color: black !important;
}

a:hover,
a.router-link-exact-active.router-link-active:hover {
  text-decoration: none !important;
  color: #212121 !important;
}
</style>
