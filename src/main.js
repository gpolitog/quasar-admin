/* eslint-disable import/no-dynamic-require, global-require, no-new  */

import Vue from 'vue';
import Quasar from 'quasar';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import moment from 'moment';
import accounting from 'accounting';

import 'quasar-extras/material-icons';
import 'quasar-extras/animate';

import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Quasar);
Vue.use(Vuelidate);

if (DEV) {
  axios.defaults.baseURL = `${process.env.SERVER_URL}/api`;
  axios.defaults.withCredentials = true;
} else {
  axios.defaults.baseURL = '/api';
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.validateStatus = function validateStatus(status) {
  return status < 400;
};

moment.locale('hu');

accounting.settings = {
  currency: {
    symbol: 'Ft',
    format: '%v %s',
    thousand: ' ',
    decimal: ',',
    precision: 0,
  },
  number: {
    precision: 0,
    thousand: ' ',
    decimal: ',',
  },
};

Vue.filter('formatMoney', (value, precision) => accounting.formatMoney(value, { precision }));
Vue.filter('formatNumber', (value, precision) => accounting.formatNumber(value, { precision }));
Vue.filter('formatDateTime', value => moment(value).format('YYYY. MM. DD. HH:mm'));

require(`./themes/app.${__THEME}.styl`);

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font');
}

Quasar.start(() => {
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(App),
  });
});
