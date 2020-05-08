<template>
  <v-content>
    <div v-if="error" class="alert alert-danger">
      {{error}}
    </div>
    <div>
      <br>
      <h2 class="display-1 font-weight-thin pl-4 ma-2"> MA CONNEXION </h2>

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
              <br><br>
              <v-text-field
                v-model="form.email"
                type="email"
                label="E-mail"
                required
                value
              ></v-text-field>

              <v-text-field
                v-model="form.password"
                type="password"
                label="Mot de passe"
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
              <h3> Tu n'as pas encore de compte chez nous ? </h3>
              <span> Alors <router-link to="/signup" class="font-weight-black teal--text">inscris-toi</router-link> dés maintenant ! </span>
            </div>

          </v-card>

          <v-card 
            d-flex
            flat
            width="30%"
            class="mx-auto">

            <v-img 
              src='https://i.pinimg.com/564x/20/e4/ac/20e4ac8189c3bf292883caaac9dee4bc.jpg'
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
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(this.$router.replace({ name: "home" }))
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>