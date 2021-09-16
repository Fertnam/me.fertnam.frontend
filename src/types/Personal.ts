import axios from 'axios'

const api = process.env.VUE_APP_API

export interface IPersonalFields {
    avatar: string
    description: string
}

export default class Personal {
    public readonly avatar: string
    public readonly description: string

    private constructor(fields: IPersonalFields) {
        this.avatar = fields.avatar
        this.description = fields.description
    }

    public static async get(): Promise<Personal> {
        type PersonalRaw = { data: IPersonalFields }
        const { data }: PersonalRaw = await axios.get(`${api}/personal`)

        return new this(data)
    }
}
