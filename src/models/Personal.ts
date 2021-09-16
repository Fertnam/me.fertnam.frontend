export interface IPersonalFields {
    avatar: string
    description: string
}

export default class Personal {
    public readonly avatar: string
    public readonly description: string

    public constructor(fields: IPersonalFields) {
        this.avatar = fields.avatar
        this.description = fields.description
    }
}
