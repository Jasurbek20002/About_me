import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import '@/assets/scss/main.scss'
import '@/assets/scss/bootstrap.scss'
import '@/assets/scss/icon.scss'
import '@/assets/js/bootstrap.bundle.min.js'
import '@/assets/scss/fonts.scss'

createApp(App).use(store).mount('#app')

