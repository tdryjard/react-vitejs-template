export interface Route {
  name: string
  path: string
  access: string // 'candidate' | 'company' | '*'
  haveMenu: boolean
}

export interface RoutesType {
  [k: string]: Route
}