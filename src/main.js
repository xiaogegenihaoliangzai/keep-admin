// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

<<<<<<< HEAD
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

=======
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
Vue.use(ElementUI);

Vue.config.productionTip = false

<<<<<<< HEAD


=======
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
