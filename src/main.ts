import { createApp } from 'vue'
import App from './App.vue'

import globalProperties from '@/plugins/global-properties'
import faIcons from './plugins/fa-icons'

import '@/assets/scss/app.scss'

createApp(App).use(globalProperties).use(faIcons).mount('#app')
