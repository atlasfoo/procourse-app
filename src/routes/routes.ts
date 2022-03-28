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
  },
  {
    path: "/register-formik",
    to: "register-formik",
    Component: lazy(() => import("../forms/pages/RegisterFormikPage")),
    name: "RegisterFormik",
  },
  {
    path: "/formik-basic",
    to: "formik-basic",
    Component: lazy(() => import("../forms/pages/FormikBasicPage")),
    name: "FormikBasic",
  },
  {
    path: "/formik-yup",
    to: "formik-yup",
    Component: lazy(() => import("../forms/pages/FormikYupPage")),
    name: "FormikYup",
  },
  {
    path: "/formik-components",
    to: "formik-components",
    Component: lazy(() => import("../forms/pages/FormikComponentsPage")),
    name: "FormikComponents",
  },
  {
    path: "/formik-abstract",
    to: "formik-abstract",
    Component: lazy(() => import("../forms/pages/FormikAbstractComponents")),
    name: "FormikAbstractComponents",
  }
]