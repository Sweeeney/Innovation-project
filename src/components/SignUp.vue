<template>
  <v-content>
    <div v-if="error" class="alert alert-danger">
      {{error}}
    </div>
    <div>
      <br>
      <h2 class="display-1 font-weight-thin pl-4 ma-2"> MON INSCRIPTION </h2>

      <v-card 
        flat
        width="70%"
        class="mx-auto"
      >

        <v-container fluid align="center" >
        <v-row dense >
          <v-card 
            flat
            d-flex
            width="70%"
          >
            <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="submit"
          action="#"
        >
          <v-text-field
            v-model="form.name"
            type="name"
            :counter="20"
            :rules="nameRules"
            label="Nom d'utilisateur"
            required
            value
          ></v-text-field>

          <v-text-field
            v-model="form.email"
            type="email"
            :rules="emailRules"
            label="E-mail"
            required
            value
          ></v-text-field>

          <v-text-field
            v-model="form.password"
            type="password"
            :rules="passwordRules"
            label="Mot de passe"
            required
            value
          ></v-text-field>

          <v-text-field
            v-model="form.confirmation"
            type="password"
            :rules="passwordOKRules"
            label="Confirmation du mot de passe"
            required
            value
          ></v-text-field>

          <v-row align="center">
            <v-col class="text-center">
              <v-btn class="mr-4" :disabled="!valid" color="success" type="submit" @click="ajoutBDDuser">Valider</v-btn>
              <v-btn class="mr-4" to="/home">Retour</v-btn>
            </v-col>
          </v-row>
        </v-form>

        <v-snackbar v-model="snackbarConnexion">
          Tu es maintenant inscrit, connecte-toi rapidement !
          <v-btn color="teal" text @click="snackbarConnexion = false">Fermer</v-btn>
        </v-snackbar>

            <br>
            <div align="center">
              <h3> Tu as déjà un compte chez nous ? </h3>
              <span> Alors <router-link to="/signin" class="font-weight-black teal--text">connecte-toi</router-link> dés maintenant ! </span>
            </div>
          </v-card>

          <v-card 
            d-flex
            flat
            width="30%"
            class="mx-auto">

            <v-img 
              src='https://i.pinimg.com/564x/ee/d6/47/eed64707f7b589a390f0294135a6212b.jpg'
              alt='signin'
              width='80%'
            > 
            </v-img>
          </v-card>
        </v-row>
        </v-container>

      </v-card>
    </div>
  </v-content>
</template>

<script>
import firebase from "firebase";
import { firestore } from "../main";

export default {
  name: "SignUp",

  firestore() {
    return {
      usersData: firestore.collection("users-data")
    };
  },

  data() {
    return {
      usersData:[],

      form: {
        name: "",
        email: "",
        password: "",
        confirmation: "",
      },
      error: null,
      valid: true,

      snackbarConnexion:false,

      dateActuelle : new Date(),

      nameRules: [
        v => !!v || 'Un nom est obligatoire',
        //v => (v && v.length >= 5) || 'Ton nom doit faire plus de 5 caractères',
        v => (v && v.length <= 20) || 'Ton nom ne doit pas dépasser 20 caractères',
      ], 
      emailRules: [
        v => !!v || 'Une adresse e-mail est obligatoire',
        v => /.+@.+\..+/.test(v) || 'Ton adresse e-mail doit être valide',
      ],
      passwordRules: [
        v => !!v || 'Un mot de passe est requis',
        v => (v && v.length >= 8) || 'Ton mot de passe doit faire plus de 8 caractères',
        v => (v && v.length <= 25) || 'Ton mot de passe ne doit pas dépasser 25 caractères',
      ],
      passwordOKRules: [
        v => !!v || 'Un mot de passe est requis',
        v => (v && v == this.form.password) || 'Tu dois saisir le même mot de passe',
      ],
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
        })
        .catch(err => {
          this.error = err.message;
        });
    },

    ajoutBDDuser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
        })
        .catch(err => {
          this.error = err.message;
        }),
      this.$firestore.usersData
        .doc(this.form.name)
        .set({
          objectifPas: 10000,
          objectifEau: 10,
          objectifCalories: 2000,
          objectifTempsPerso: 90,
          signUpDate: this.dateActuelle.getDate() + '/' + this.dateActuelle.getMonth() + '/' + this.dateActuelle.getYear()
        })
        .then((this.snackbarConnexion = true)),
      this.$refs.form.reset()
    }

  }
};
</script>
