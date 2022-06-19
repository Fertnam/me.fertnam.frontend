import { App } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faUser,
    faBoxArchive,
    faDownload,
} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faBoxArchive, faDownload)

export default {
    install(app: App): void {
        app.component('fa-icon', FontAwesomeIcon)
    },
}
