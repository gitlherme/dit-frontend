import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UserRegister from '@/store/users/register'
import Users from '@/store/users'
import UserAvatar from '@/store/users/avatar'
import UserSocials from '@/store/users/socials'
import UserEducations from '@/store/users/educations'

import Auth from '@/store/auth'

let userRegister: UserRegister
let users: Users
let userAvatar: UserAvatar
let userSocials: UserSocials
let userEducations: UserEducations
let auth: Auth

function initializeStores(store: Store<any>): void {
  userRegister = getModule(UserRegister, store)
  users = getModule(Users, store)
  userAvatar = getModule(UserAvatar, store)
  userSocials = getModule(UserSocials, store)
  userEducations = getModule(UserEducations, store)
  auth = getModule(Auth, store)

}

export { initializeStores, userRegister, users, userAvatar, userSocials, userEducations, auth }