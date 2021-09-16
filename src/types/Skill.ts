import axios from 'axios'

const api = process.env.VUE_APP_API

export interface ISkillFields {
    id: number
    name: string
    progress: number | null
}

export default class Skill {
    public readonly id: number
    public readonly name: string
    public readonly progress: number | null

    private constructor(fields: ISkillFields) {
        this.id = fields.id
        this.name = fields.name
        this.progress = fields.progress
    }

    public static async all(): Promise<Skill[]> {
        type SkillsRaw = { data: ISkillFields[] }
        const { data: skills }: SkillsRaw = await axios.get(`${api}/skills`)

        return skills.map((item) => new this(item))
    }
}
