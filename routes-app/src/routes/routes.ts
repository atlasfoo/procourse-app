import { lazy, LazyExoticComponent } from "react"

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */"../lazyload/pages/LazyPage1"))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../lazyload/pages/LazyPage2"))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../lazyload/pages/LazyPage3"))

type JSXComponent = (props: any) => JSX.Element

interface Route {
  path: string
  to: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

export const routes: Array<Route> = [
  {
    path: "/lazy1",
    to: "lazy1",
    Component: Lazy1,
    name: "Lazy-1",
  },
  {
    path: "/lazy2",
    to: "lazy2",
    Component: Lazy2,
    name: "Lazy-2",
  },
  {
    path: "/lazy3",
    to: "lazy3",
    Component: Lazy3,
    name: "Lazy-3",
  }
]