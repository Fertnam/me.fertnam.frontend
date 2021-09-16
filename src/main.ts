import { createApp } from 'vue'
import App from './App.vue'

import globalProperties from '@/plugins/global-properties'

import '@/assets/scss/app.scss'

createApp(App).use(globalProperties).mount('#app')
