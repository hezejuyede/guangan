// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/base.less'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import echarts from 'echarts';
Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.use(VueSocketio, socketio('http://localhost:3000'));
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
