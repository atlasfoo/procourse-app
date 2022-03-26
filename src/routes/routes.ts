import { lazy, LazyExoticComponent } from "react"
import NoLazy from "../lazyload/pages/NoLazy"

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */  "../lazyload/layout/LazyLayout"))

type JSXComponent = (props: any) => JSX.Element

interface Route {
  path: string
  to: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

export const routes: Array<Route> = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy Dashboard",
  },
  {
    path: "/no-lazy",
    to: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
]