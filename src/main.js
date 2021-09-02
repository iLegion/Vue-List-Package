import Vue from 'vue';

import App from './App.vue';
import TestApp from "./TestApp";

Vue.config.productionTip = false;

let mountedComponent = {
  component: App,
  selector: '#app'
};

if (process.env.NODE_ENV === 'development-test') {
  mountedComponent = {
    component: TestApp,
    selector: '#app'
  };
}

new Vue({
  render: h => h(mountedComponent.component),
}).$mount(mountedComponent.selector);
