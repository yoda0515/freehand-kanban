<template>
  <div class="signin">
    <form class="form-signin">
      <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        v-model="form.email"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        autocomplete="email"
        required
        autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        v-model="form.password"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        autocomplete="current-password"
        required>
      <button
        v-on:click="onSubmit()"
        class="btn btn-lg btn-primary btn-block"
        type="submit">
        Sign in
      </button>
    </form>
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
      form: new SignInForm()
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
