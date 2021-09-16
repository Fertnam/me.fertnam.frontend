import Skill, { ISkillFields } from '@/models/Skill'
import axios from 'axios'

const api = `${process.env.VUE_APP_API}/skills`

export default class SkillsService {
    public async all(): Promise<Skill[]> {
        type SkillsRaw = { data: ISkillFields[] }
        const { data: skills }: SkillsRaw = await axios.get(api)

        return skills.map((item) => new Skill(item))
    }
}
