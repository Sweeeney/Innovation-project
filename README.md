# Projet - APPLICATION WEB MOBILE E-SANTE
# Dans le cadre du cours de Technologies du web pour l'innovation. 

## Avant de commencer à utiliser l'application, il est nécessaire de s'assurer que les dépendances ont été installées et que les plugins l'ont été également.
### Installation des dépendances

```
npm install
```

ou

```
yarn install
```

### Installation du plugin Router de Vue.js

`npm install vue-router`

ou

`yarn add vue-router`

### Installation du plugin Vuex de Vue.js

`npm install vuex`

ou

`yarn add vuex`

### Installation du plugin firebase (https://www.npmjs.com/package/firebase)

`npm install firebase`

ou

`yarn add firebase`

### Installation du plugin vue-firestore (https://www.npmjs.com/package/vue-firestore)

`npm install vue-firestore`

ou

`yarn add vue-firestore`


## Paramètres du lancement du projet
### Compilations et recharges à chaud pour le développement
```
yarn serve
```

### Compilation et miniaturisation pour la production
```
yarn build
```

### Lentilles et corrections de fichiers
```
yarn lint
```

### Personnaliser la configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Petits mots sur chacune des pages du site
### Accueil (Home.vue)
La page Accueil est accessible à tous, sans obligatoirement être inscrit sur notre site. Elle est donc en mode "public". 
Les autres pages sont plutôt "privées", il faut donc s'inscrire pour y accéder.   

### Connexion / Inscription (SignIn.vue / SignUp.vue)
Ces deux pages sont également accessibles de manière "public" et permettent à l'utilisateur de s'inscrire ou de se connecter s'il possède déjà un compte. 

### Tableau de bord (Dashboard.vue)
Cette page correspond au tableau de bord de l'utilisateur (pour les utilisateurs ayant un compte uniquement) et concerne la journée en cours. 
L'utilisateur peut entrer des données le concernant et ainsi suivre ses objectifs quotidiens, entre autres.

### Historique (Master.vue)
La page Historique amène à un calendrier visible par mois ou par jour. L'utilisateur peut choisir d'afficher des détails concernant un mois entier ou un jour en particulier, et ce, en choisisant la date, puis en cliquant sur le bouton "Accéder".

### Pages des détails (DetailsMois.vue / DetailsJour.vue)
Ces pages, comme leurs noms l'indiquent, donnent les détails concernant l'utilsateur par mois ou par jour. Comme il s'agit d'historiques, ces pages ne sont pas modifiables, contrairement au tableau de bord. Elles ne sont également accessibles que si l'utilisateur a un compte et qu'il est connecté.  

### Paramètres (Parameters.vue)
Correspond à la page des paramètres du compte et des objectifs de l'utilsateur. 



