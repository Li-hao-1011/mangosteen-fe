import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { App } from './App'
import { routes } from './config/routes'
import { history } from './shared/history'
import '@svgstore'
import { fetchMe, promiseMe } from './shared/me'

const router = createRouter({
  history,
  routes
})
fetchMe()
const whiteList: Record<string, 'exact' | 'startsWith'> = {
  '/': 'exact',
  '/items': 'exact',
  '/welcome': 'startsWith',
  '/sign_in': 'startsWith'
}
router.beforeEach((to, from) => {
  for (const key in whiteList) {
    const value = whiteList[key]
    if (value === 'exact' && to.path === key) {
      return true
    }
    if (value === 'startsWith' && to.path.startsWith(key)) {
      return true
    }
  }
  return promiseMe!.then(
    () => true,
    () => '/sign_in?return_to=' + to.path
  )

  /*   if (['/', '/items'].includes(to.path) || to.path.startsWith('/welcome') || to.path.startsWith('/sign_in')) {
    return true
  } else {
    return promiseMe!.then(
      () => true,
      () => '/sign_in?return_to=' + to.path
    )
  } */
})

const app = createApp(App)
app.use(router)
app.mount('#app')
