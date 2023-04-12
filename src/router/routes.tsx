import { RoutesType } from 'types'

const routes: RoutesType = {
  home: {
    path: '/',
    name: 'home',
    access: '*',
    haveMenu: true,
  },
}

export default routes
