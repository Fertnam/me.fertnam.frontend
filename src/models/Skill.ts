export interface ISkillFields {
    id: number
    name: string
    progress: number | null
}

export default class Skill {
    public readonly id: number
    public readonly name: string
    public readonly progress: number | null

    public constructor(fields: ISkillFields) {
        this.id = fields.id
        this.name = fields.name
        this.progress = fields.progress
    }
}
