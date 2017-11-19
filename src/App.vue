<template>
  <div id="q-app">
    <login-page v-if="!isLoggedIn" />

    <q-layout
      v-if="isLoggedIn"
      ref="layout"
      view="hHr LpR lFr"
    >

      <left-panel slot="left" />

      <router-view />
    </q-layout>
  </div>
</template>

<script>
  import {
    QLayout,
  } from 'quasar';

  import loginPage from '@/loginPage/View.vue';
  import leftPanel from '@/leftPanel/View.vue';

  export default {
    name: 'app',
    computed: {
      isLoggedIn() {
        return this.$store.state.user.isLoggedIn;
      },
    },
    components: {
      QLayout,
      loginPage,
      leftPanel,
    },
  };

</script>

<style>

</style>
