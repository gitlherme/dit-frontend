import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

interface UpdatePayload {
  name: string
  description: string
}

@Module({ name: 'users/soft-skills', stateFactory: true, namespaced: true})
export default class UserSoftSkills extends VuexModule {

  @Action
  public async update (payload: UpdatePayload) {
    const softSkill = await $axios.$put('/api/user/social', payload)
    this.context.commit('users/SET_USER_SOFT_SKILLS', softSkill, { root: true })
  }
}
