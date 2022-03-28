import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

const FormikComponentsPage = () => {
	return (
		<div>
			<h1>Formik Components</h1>

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
						<label htmlFor="firstName">First Name</label>
						<Field name="firstName" type="text" />
						<ErrorMessage name="firstName" component='span' />

						<label htmlFor="lastName">Last Name</label>
						<Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

						<label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Profession</label>
            <Field name="jobType" as="select">
              <option value="">Select a profession...</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

						<label htmlFor="terms">
              <Field name="terms" type="checkbox" /> 
              Terms and conditions 
            </label>
						
            <ErrorMessage name="terms" component="span" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormikComponentsPage;
