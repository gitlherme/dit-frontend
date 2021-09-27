import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UserRegister from '@/store/users/register'

let userRegister: UserRegister

function initializeStores(store: Store<any>): void {
  userRegister = getModule(UserRegister, store)
}

export { initializeStores, userRegister }