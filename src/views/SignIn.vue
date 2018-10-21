<template>
  <div class="signin">
    <img class="mb-4" src="../assets/logo.svg" alt="" width="72" height="72">
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="form.email"
        v-bind:rules="emailRules"
        placeholder="Email address"
        autocomplete="email"
        required
        autofocus>
      </v-text-field>
      <v-text-field
        v-model="form.password"
        v-bind:rules="passwordRules"
        type="password"
        placeholder="Password"
        autocomplete="current-password"
        required>
      </v-text-field>
      <v-btn
        v-bind:disabled="!valid"
        v-on:click="onSubmit()"
        block
        class="primary">
        sign in
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Component
export default class SignIn extends Vue {

  public form: SignInForm;

  public data() {
    return {
      form: new SignInForm(),
      valid: true,
      emailRules: [
        (v: string) => !!v || 'Email is required',
        (v: string) => /.+@.+/.test(v) || 'invalid Email format'
      ],
      passwordRules: [
        (v: string) => !!v || 'Password is required'
      ],
    };
  }

  public onSubmit(): void {
    firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then((user: UserCredential) => {
      this.$router.push('/dashboard');
    }).catch((err: any) => {
      // console.log('authentication failed');
    });
  }

}

class SignInForm {
  public email: string;
  public password: string;
}

</script>

<style scoped lang="sass">
.signin
  text-align: center
</style>
