import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'
import User from '@/models/User'

interface UpdatePayload {
  username?: string
  name?: string
  bio?: string
}

@Module({ name: 'users', stateFactory: true, namespaced: true})
export default class Users extends VuexModule {
  private user = {} as User


  get $single() {
    return this.user
  }

  @Mutation
  UPDATE_USER(user: User) {
    this.user = user
  }

  @Mutation
  SET_USER_AVATAR(avatar: User['avatar']) {
    this.user.avatar = avatar
  }

  @Mutation
  SET_USER_SOCIALS(socials: User['socials']) {
    this.user.socials = socials
  }

  @Mutation
  SET_USER_SOFT_SKILLS(softSkills: User['softSkills']) {
    this.user.softSkills = softSkills
  }

  @Action
  public async show(){
    if (!$cookies.get('token')) return console.log('no token')
    const user = await $axios.$get('/api/user')
    this.context.commit('UPDATE_USER', user)
  }

  @Action
  public async update(payload: UpdatePayload) {
    await $axios.$put('/api/user', payload)
    this.context.commit('UPDATE_USER', payload)
  }
}
