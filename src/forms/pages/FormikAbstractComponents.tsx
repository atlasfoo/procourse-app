import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelectInput, MyTextInput } from "../components";

import "../styles/styles.css";

const FormikAbstractComponentsPage = () => {
	return (
		<div>
			<h1>Formik Abstract</h1>

			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
          terms: false,
          jobType: "",
				}}
				onSubmit={(values, { setSubmitting }) => console.log(values)}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.required("Requerido")
						.max(15, "Máximo 15 caracteres"),
					lastName: Yup.string()
						.required("Requerido")
						.max(15, "Máximo 15 caracteres"),
					email: Yup.string().required("Requerido").email("Email inválido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar los términos y condiciones"),
          jobType: Yup.string().required("Requerido"),
				})}
			>
				{(formik) => (
					<Form>
            <MyTextInput label="First Name" name="firstName" type="text" placeholder="First Name"/>

            <MyTextInput label="Last Name" name="lastName" type="text" placeholder="Last Name"/>

						<MyTextInput label="Email" name="email" type="email" placeholder="Email"/>

            <MySelectInput name="jobType" label="Profession">
              <option value="">Select a profession...</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="other">Other</option>
            </MySelectInput>

            <MyCheckbox label="Terms and conditions" name="terms" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormikAbstractComponentsPage;
