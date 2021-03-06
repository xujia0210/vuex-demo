import Vue from 'vue'
import App from './App'
import './assets/style/common.less'
import './assets/style/reset.less'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vconsole from 'vconsole'

Vue.config.productionTip = false
Vue.use(ElementUI);

if (/sandbox.tiejin/.test(window.location.href) || /127.0.0.1/.test(window.location.href) || /10.3.0.333/.test(window.location.href)) {
  const vconsole = new Vconsole()
}
// 运行时动态设置
// pageResize()
// window.onresize = pageResize
// function pageResize() {
//   let fontSize= Math.min(screen.width, document.documentElement.getBoundingClientRect().width) / 375 * 16
//   document.documentElement.style.fontSize = (fontSize >= 32 ? 32 : fontSize) + 'px'
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')