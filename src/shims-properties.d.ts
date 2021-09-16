import { AxiosStatic } from 'axios'

export {}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $style: any
        $refs: any
        $timeout: (time: number) => Promise<void>
        $axios: AxiosStatic
    }
}
