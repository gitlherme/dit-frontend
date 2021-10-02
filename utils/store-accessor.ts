import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UserRegister from '@/store/users/register'
import UserMain from '@/store/users/main'

import Auth from '@/store/auth'

let userRegister: UserRegister
let userMain: UserMain
let auth: Auth


function initializeStores(store: Store<any>): void {
  userRegister = getModule(UserRegister, store)
  userMain = getModule(UserMain, store)

  auth = getModule(Auth, store)

}

export { initializeStores, userRegister, userMain, auth }