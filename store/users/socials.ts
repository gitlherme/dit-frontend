import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

interface UpdatePayload {
  linkedinUrl?: string
  githubUrl?: string
  twitterUrl?: string
}

@Module({ name: 'users/socials', stateFactory: true, namespaced: true})
export default class UserSocials extends VuexModule {
  @Action
  public async update (payload: UpdatePayload) {
    const socials = await $axios.$put('/api/user/social', payload)
    console.log(socials)
    this.context.commit('users/SET_USER_SOCIALS', socials, { root: true })
  }
}
