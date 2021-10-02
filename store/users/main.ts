import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'
import User from '@/models/User'

interface UpdatePayload {
  username?: string
  name?: string
  bio?: string
}

@Module({ name: 'user/main', stateFactory: true, namespaced: true})
export default class UserMain extends VuexModule {
  private user = {} as User


  get $user() {
    return this.user
  }

  @Mutation
  UPDATE_USER(user: User) {
    this.user = user
  }

  @Action
  public async show(){
    const user = await $axios.$get('/user')
    console.log(user)
    this.context.commit('UPDATE_USER', user)
  }

  @Action
  public async update(payload: UpdatePayload) {
    await $axios.$put('/api/user', payload)
    this.context.commit('UPDATE_USER', payload)
  }
}
