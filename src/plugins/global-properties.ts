import { App } from 'vue'
import axios from 'axios'
import services from '@/services'

export default {
    install(app: App): void {
        function timeout(time: number): Promise<void> {
            return new Promise((resolve) => {
                setTimeout(resolve, time)
            })
        }

        app.config.globalProperties.$axios = axios
        app.config.globalProperties.$timeout = timeout
        app.config.globalProperties.$services = services
    },
}
