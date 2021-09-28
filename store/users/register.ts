import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

interface CreatePayload {
  email: string,
  redirectUrl: string
}

interface ShowPayload {
  key: string
}

@Module({ name: 'users/register', stateFactory: true, namespaced: true})
export default class UserRegister extends VuexModule {
  @Action
  public async create(payload: CreatePayload) {
    await $axios.$post('/users/register', payload)
  }

  @Action
  public async show(payload: ShowPayload) {
    const user = await $axios.get(`/users/register/${payload}`)
    return user
  }

  @Action
  public async update() {

  }
}
