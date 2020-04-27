<template>
  <v-row class="align-center">
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :counter="20"
        :rules="passwordRules"
        label="Mot de passe"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Valider
      </v-btn>

      <v-btn
        color="cancel"
        class="mr-4"
        @click="reset"
      >
        Retour
      </v-btn>
    </v-form>
  </v-row>
</template>

<script>
import * as firebase from "firebase";

export default {
  name: "Signin",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      error: "",
      success: ""
    };
  },
  methods: {
    signin() {
      this.error = "";
      this.success = "";

      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "master" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>