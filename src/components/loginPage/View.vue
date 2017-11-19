<template>
    <div class="container-fluid">
      <h5 class="text-center text-grey-6">YMY.co ERP</h5>

      <div class="row justify-center">
        <div class="input-container">
          <q-field
            :error="$v.form.email.$error"
            error-label="Hibás e-mail cím formátum"
          >
            <q-input
              float-label="E-mail"
              type="email"
              placeholder="Írja be az e-mail címét!"
              autofocus
              v-model="form.email"
              @blur="$v.form.email.$touch"
              @keyup.enter="$refs.loginButton.click()"
            />
          </q-field>
        </div>
      </div>

      <div class="row justify-center">
        <div class="input-container">
          <q-field
            :error="$v.form.passwd.$error"
            error-label="Jelszó megadása kötelező"
          >
            <q-input
              float-label="Jelszó"
              type="password"
              placeholder="Írja be a jelszavát!"
              v-model="form.passwd"
              @blur="$v.form.passwd.$touch"
              @keyup.enter="$refs.loginButton.click()"
            />
          </q-field>
        </div>
      </div>

      <div class="row justify-center alert-container" >
        <q-transition
          enter="headShake"
          leave="fadeOut"
        >
          <q-alert
            color="negative"
            icon="warning"
            v-show="failedLogin"
          >
            Hibás e-mail cím vagy jelszó!
          </q-alert>
        </q-transition>
      </div>

      <div class="row justify-around button-container">
        <p>
          <q-btn
            class="buttons"
            color="primary"
            ref="loginButton"
            loader
            @click="login"
          >
            BEJELENTKEZÉS
            <q-spinner slot="loading" />
          </q-btn>
        </p>
      </div>
    </div>
  </template>

<script>
  import { required, email } from 'vuelidate/lib/validators';

  import 'quasar-extras/animate/headShake.css';
  import 'quasar-extras/animate/fadeOut.css';

  import {
    QInput,
    QBtn,
    QIcon,
    QField,
    QAlert,
    QTransition,
    QSpinner,
  } from 'quasar';

  export default {
    name: 'loginPage',
    data() {
      return {
        failedLogin: false,
        form: {
          email: '',
          passwd: '',
        },
      };
    },
    validations: {
      form: {
        email: {
          required,
          email,
        },
        passwd: {
          required,
        },
      },
    },
    methods: {
      async login(event, done) {
        if (this.$v.$invalid) {
          done();
          this.$v.$touch();
          return;
        }

        this.failedLogin = false;

        const success =
          this.$store.dispatch('user/login', this.form);

        if (!success) {
          this.form.passwd = '';
          this.failedLogin = true;
          done();
        }
      },
    },
    components: {
      QInput,
      QBtn,
      QIcon,
      QField,
      QAlert,
      QTransition,
      QSpinner,
    },
  };

</script>

<style scoped>


</style>
