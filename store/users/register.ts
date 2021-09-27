import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

interface CreatePayload {
  description: string,
  redirectUrl: string
}

@Module({ name: 'users/register', stateFactory: true, namespaced: true})
export default class UserRegister extends VuexModule {
  @Action
  public async create(payload: CreatePayload) {
    await $axios.$post('/users/register', payload)
  }

  @Action
  public async show() {

  }

  @Action
  public async update() {

  }
}
