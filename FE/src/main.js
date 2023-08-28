import { createApp } from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router'

import './main.css'

axios.defaults.baseURL = 'http://localhost:3000'

const app = createApp(App)

app.use(router)

app.mount('#app')
