import { AxiosStatic } from 'axios'
import { Services } from '@/services'

export {}

declare module '@vue/runtime-core' {
    // noinspection JSUnusedGlobalSymbols
    interface ComponentCustomProperties {
        $style: any
        $refs: any
        $timeout: (time: number) => Promise<void>
        $axios: AxiosStatic
        $services: Services
    }
}
