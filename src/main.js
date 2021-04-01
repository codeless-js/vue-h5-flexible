import Vue from 'vue';
import App from './app.vue';
import router from './router/index';
import store from './store/index';
// 权限校验
import './permission';

// 全局配置
import $settings from '@/settings.js';
Vue.prototype.$settings = $settings;

// 全局引入按需引入UI库 vant
import '@/plugins/vant';
// 引入全局样式
import '@/styles/index.scss';
// 移动端适配
import 'lib-flexible/flexible.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
