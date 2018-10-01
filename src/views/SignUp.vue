<template>
  <div class="signup">
    <div>
      <b-form v-on:submit="onSubmit" v-on:reset="onReset">
        <b-form-group id="email-group"
                      label="Email address:"
                      label-for="email-input"
                      description="We'll never share your email with anyone else.">
          <b-form-input id="email-input"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="Enter email">
          </b-form-input>
        </b-form-group>
        <b-form-group id="name-gruop"
                      label="Your Name:"
                      label-for="name-input">
          <b-form-input id="name-input"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="Enter name">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SignUpForm } from './sign-up';

@Component
export default class SignUp extends Vue {

  public form: SignUpForm;

  public data() {
    return {
      form: new SignUpForm()
    };
  }

  public onSubmit(): void {
    // TODO do something
  }

  public onReset(): void {
    this.form = new SignUpForm();
  }

}
</script>

<style scoped lang="sass">

</style>
