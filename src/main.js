import './assets/main.scss'

import App from './App.vue'
import VFragment from './components/VFragment.vue'
// wow js
import WOW from 'wow.js'
import { createApp } from 'vue'
import router from './router'

// import './assets/js/vendor/jquery-3.5.1-min.js'
// import './assets/js/vendor/modernizr-3.7.1.min.js'
// // Plugins js 
// import './assets/js/plugins.js'
// // Slick js
// import './assets/js/slick.min.js'
// // Scrolling Nav js
// import './assets/js/jquery.easing.min.js'
// import './assets/js/scrolling-nav.js'
// // Particles js
// import './assets/js/particles.min.js'

// Main js
// import './assets/js/main.js'


window.WOW = new WOW().init();

const app = createApp(App)

app.use(router)
app.component('v-fragment', VFragment)

app.mount('#app')
