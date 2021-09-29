import { Middleware } from '@nuxt/types'
import { $cookies } from '@/utils/nuxt-instance'

const auth: Middleware = ({ store, redirect }) => {
  if (!$cookies.get('token')) {
    console.log($cookies.get('token'))
    console.log('entrou aqui?')
    console.log(store.state.auth.token)
    return redirect('/login')
  }
}

export default auth