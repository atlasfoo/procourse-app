import { lazy, LazyExoticComponent } from "react"

type JSXComponent = (props: any) => JSX.Element

interface Route {
  path: string
  to: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

export const routes: Array<Route> = [
  {
    path: "/register",
    to: "register",
    Component: lazy(() => import("../forms/pages/RegisterPage")),
    name: "Register",
  }
]