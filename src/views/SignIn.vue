<template>
  <div class="signin">
    <div>
      <b-form v-on:submit="onSubmit" v-on:reset="onReset">
        <b-form-group id="email-group"
                      label="Email address:"
                      label-for="email-input"
                      description="We'll never share your email with anyone else.">
          <b-form-input id="email-input"
                        type="email"
                        autocomplete="email"
                        v-model="form.email"
                        required
                        placeholder="Enter email">
          </b-form-input>
        </b-form-group>
        <b-form-group id="password-gruop"
                      label="Password:"
                      label-for="password-input">
          <b-form-input id="password-input"
                        type="password"
                        autocomplete="current-password"
                        v-model="form.password"
                        required
                        placeholder="Enter password">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
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
      // console.log('authentication success');
    }).catch((err: any) => {
      // console.log('authentication failed');
    });
  }

  public onReset(): void {
    this.form = new SignInForm();
  }

}

class SignInForm {
  public email: string;
  public password: string;
}

</script>

<style scoped lang="sass">

</style>
