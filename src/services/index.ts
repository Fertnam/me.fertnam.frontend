import PersonalService from '@/services/personal'
import SkillsService from '@/services/skills'

export class Services {
    public readonly personal: PersonalService
    public readonly skills: SkillsService

    public constructor() {
        this.personal = new PersonalService()
        this.skills = new SkillsService()
    }
}

export default new Services()
