import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import '../styles/styles.css'

const RegisterFormikPage = () => {

  
  return (
    <div>
      <h1>Formik Register</h1>
      <Formik 
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        
        onSubmit={(values, { setSubmitting }) => console.log(values)}

        validationSchema={Yup.object({
					name: Yup.string()
						.required("Requerido")
						.max(15, "Máximo 15 caracteres"),
					email: Yup.string().required("Requerido").email("Email inválido"),
          password: Yup.string().required("Requerido").min(6, "Mínimo 6 caracteres"),
          passwordConfirm: Yup.string().required("Requerido").oneOf([Yup.ref('password'), null], "Las contraseñas no coinciden"),
				})}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="Name" name="name" type="text" placeholder="Name"/>
            <MyTextInput label="Email" name="email" type="email" placeholder="Email"/>
            <MyTextInput label="Password" name="password" type="password" placeholder="Password"/>
            <MyTextInput label="Password Confirm" name="passwordConfirm" type="password" placeholder="Password Confirm"/>

            <button type="submit">Submit</button>
            <button onClick={formik.handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterFormikPage