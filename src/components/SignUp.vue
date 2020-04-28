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
              <v-btn class="mr-4" :disabled="!valid" color="success" type="submit">Valider</v-btn>
              <v-btn class="mr-4" to="/home">Retour</v-btn>
            </v-col>
          </v-row>
        </v-form>

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
              src='https://i.pinimg.com/564x/73/0f/2c/730f2c2aaa92463b6bc31e5f5edb190d.jpg'
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

export default {
  name: "SignUp",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmation: "",
      },
      error: null,
      valid: true,
      nameRules: [
        v => !!v || 'Un nom est obligatoire',
        v => (v && v.length <= 10) || 'Ton nom ne doit pas dépasser 20 caractères',
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
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
