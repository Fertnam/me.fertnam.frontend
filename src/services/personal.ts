import Personal, { IPersonalFields } from '@/models/Personal'
import axios from 'axios'

const api = `${process.env.VUE_APP_API}/personal`

export default class PersonalService {
    public async get(): Promise<Personal> {
        type PersonalRaw = { data: IPersonalFields }
        const { data }: PersonalRaw = await axios.get(api)

        return new Personal(data)
    }
}
