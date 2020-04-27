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
          this.success = "";
          this.error = err.message;
        });
    }
  },
  computed: {
    form_is_completed() {
      return this.user.email !== "" && this.user.password !== "";
    }
  }
};
</script>

<style scoped>
form {
  display: inline-flex; 
  flex-direction: column;
  align-items: center;
  height: 15em;
  width: 40%;
  align-content: center;
}

button {
  margin-top: 2em;
  padding: 0.6em;
  border-radius: 5px;
  background: #41b883;
  color: white;
  border: none;
  width: 60%;
}
button:disabled {
  opacity: 0.7;
}

a {
  margin-top: 2em;
  color: white;
  font-size: 0.8em;
}
a:hover {
  color: #41b883;
}

span {
  text-decoration: underline;
  font-size: 1.3em;
}

.error {
  color: tomato;
}

.success {
  color: yellowgreen;
}
</style>