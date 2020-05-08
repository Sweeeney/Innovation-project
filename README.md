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

## Petits mots sur notre sujet
Cette application regroupe des informations données par l'utilisateur et des informations recueillies par des objets connectés. Nous voulions nous axer sur l'aspect psychologique de la personne. Pour cela, nous avons mixé l'aspect "e-santé", avec des objectifs physiques et alimentaires, et l'aspect plutôt "psychologique/bien-être", en proposant à l'utilisateur de se demander comment il se sentait et en lui donnant accès à des ressources en ligne, ou en lui faisant simplement des recommandations, afin d'améliorer son bien-être.

## Petits mots sur chacune des pages du site
### Accueil (Home.vue)
La page Accueil est accessible à tous, sans obligatoirement être inscrit sur notre site. Elle est donc en mode "public". 
Les autres pages sont plutôt "privées", il faut donc s'inscrire pour y accéder.   

### Connexion / Inscription (SignIn.vue / SignUp.vue)
Ces deux pages sont également accessibles de manière "public" et permettent à l'utilisateur de s'inscrire ou de se connecter s'il possède déjà un compte. 
En fonction de la manière dont sont créées les données, il est nécessaire de ne pas créer deux utilisateurs avec le même nom. De plus, le nom ne doit pas contenir de caractères spéciaux tels que ("/") et ne doit pas commencer par un point.

Lorsque l'utilisateur a terminé son inscription et qu'il a validé, un message (snack-bar) s'affiche pour l'informer de la bonne inscription, mais il reste sur le formulaire après validation. L'utilisateur inscrit peut donc retourner sur la page Accueil (par exemple) pour commencer sa navigation.

### Tableau de bord (Dashboard.vue)
Cette page correspond au tableau de bord de l'utilisateur (pour les utilisateurs ayant un compte uniquement) et concerne la journée en cours. 
L'utilisateur peut entrer des données le concernant et ainsi suivre ses objectifs quotidiens, entre autres.

- Dans l'onglet <strong>"Objectifs quotidiens"</strong>, l'utilisateur peut saisir sa progression quant aux objectifs qu'il s'est fixé. L'utilisateur peut les modifier dans les paramètres, ce qui va mettre à jour le tableau de bord. En ce qui concerne les pas effectués, comme c'est une donnée retransmise par la montre normalement, actuellement la donnée affichée dans le tableau de bord est une valeur aléatoire. Pour les trois autres objectifs, l'utilisateur peut entrer les valeurs qui correspondent à sa consommation d'eau, de calories et à son temps personnel, ce qui met à jour dynamiquement la page. De cette manière, l'utilisateur peut visualiser ce qu'il lui reste à faire pour atteindre ses objectifs.
- Dans l'onglet <strong>"Activité physique du jour"</strong>, l'utilisateur peut mesurer son rythme cardiaque, en supposant que sa montre soit connectée pour qu'elle puisse le mesurer. A chaque fois qu'il appuie sur le coeur, ça reprend son rythme cardiaque. Dans le cadre de ce projet, comme nous n'avons pas réellement connecté la montre de l'utilisateur, il s'agit bien évidemment de valeurs fictives et cette carte du rythme cardiaque fait office de simulation. Il peut ensuite choisir un sport qu'il aurait pratiqué dans la journée et l'enregistrer. Cette donnée apparaitra ensuite dans la base de données, une fois qu'il aura validé.
- Dans l'onglet <strong>"Sommeil"</strong>, l'utilisateur accède aux données enregistrées par sa montre sur l'état de son sommeil pour la nuit qu'il vient de passer. Il peut également renseigner la qualité et la quantité de celui-ci, données qui seront enregistrées dans la base de données, afin de nous aiguiller sur son état de fatigue et lui donner un historique sur le mois de son sommeil.
- Dans l'onglet <strong>"Humeur"</strong>, l'utilisateur peut saisir son humeur et ainsi avoir une recommandation de film à regarder, en fonction de comment il se sent.
![Smileys humeur](src/assets/humeur.png)

### Historique (Master.vue)
La page Historique amène à un calendrier visible par mois ou par jour. L'utilisateur peut choisir d'afficher des détails concernant un mois entier ou un jour en particulier, et ce, en choisissant la date, puis en cliquant sur le bouton "Accéder".

### Pages des détails (DetailsMois.vue / DetailsJour.vue)
Ces pages, comme leurs noms l'indiquent, donnent les détails concernant l'utilsateur par mois ou par jour. Comme il s'agit d'historiques, ces pages ne sont pas modifiables, contrairement au tableau de bord. Elles ne sont également accessibles que si l'utilisateur a un compte et qu'il est connecté.  

Pour la page des <strong>détails pour un jour</strong>, elle est similaire à la page du tableau du bord, mais n'est simplement pas dynamique comme il s'agit d'un historique. De ce fait, dans l'onglet "Humeur", seul des films, recommandés pour l'utilisateur, sont affichés.

En ce qui concerne la page des <strong>détails des mois</strong>, il y a quatre onglets. 
- Dans l'onglet <strong>"Général"</strong>, l'utilisateur peut voir un résumé des humeurs qu'il a rentré au cours du mois et voir le poids (avec l'IMC correspondant) qu'il avait. Il peut également avoir accès à des livres sur le bien-être (qu'il peut acheter en ligne) et à des citations. 
- Dans l'onglet <strong>"Sommeil"</strong>, il peut revoir via des graphiques l'historique de son sommeil pour le mois sélectionné. 
- Dans l'onglet <strong>"Alimentation"</strong>, il peut revoir en détail sa consommation d'eau, de protéines, de glucides, etc., pour le mois sélectionné. Des articles en rapport avec l'alimentation lui sont également proposés sur cette onglet. 
- Pour l'onglet <strong>"Sport"</strong>, il a, de la même manière, un résumé concernant ses activités physiques. Il peut voir le nombre de pas effectués, les calories brûlées, le nombre total d'heures en activité effectuées, s'il a atteint son objectif mensuel, et enfin il peut visualiser ses quatre sports préférés.

### Paramètres (Parameters.vue)
Correspond à la page des paramètres du compte et des objectifs de l'utilisateur (il peut y modifier ses données). 
Ainsi, lorsque l'utilisateur modifie ses objectifs (premier onglet), cela met à jour les objectifs dans le tableau de bord.

Ensuite, lorsqu'utilisateur souhaite modifier ses informations personnelles, il peut uniquement modifier son mot de passe. Ce changement ne le déconnecte pas, mais la prochaine fois qu'il souhaitera se connecter, il devra utiliser le nouveau mot de passe.
Celui-ci n'est pas immédiatement effectif et nécessite un certain temps d'adaptation.



