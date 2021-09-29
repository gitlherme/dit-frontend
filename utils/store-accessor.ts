import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UserRegister from '@/store/users/register'
import Auth from '@/store/auth'

let userRegister: UserRegister
let auth: Auth

function initializeStores(store: Store<any>): void {
  userRegister = getModule(UserRegister, store)
  auth = getModule(Auth, store)
}

export { initializeStores, userRegister, auth }