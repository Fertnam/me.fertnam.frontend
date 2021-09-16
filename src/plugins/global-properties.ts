import { App } from 'vue'
// import axios from 'axios'

export default {
    install(app: App): void {
        function timeout(time: number): Promise<void> {
            return new Promise((resolve) => {
                setTimeout(resolve, time)
            })
        }

        // app.config.globalProperties.$axios = axios
        app.config.globalProperties.$timeout = timeout
    },
}
