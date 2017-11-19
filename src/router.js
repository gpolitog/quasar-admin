import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function load(path) {
  return () => System.import(`@/${path}.vue`);
}

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: load('home/View') },
    { path: '/human-resource/employees', component: load('humanResource/employees/View') },
    { path: '*', component: load('home/View') },
  ],
});
