import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MySelectInput, MyTextInput } from "../components";

import jsonForm from '../data/custom-form.json';

import '../styles/styles.css'

type valueType = {[key: string]: any}

const initialValues: valueType = {}
const requiredFields: valueType = {}

jsonForm.forEach((field) => {
  initialValues[field.name] = field.value
  
  let schema = Yup.string()

  if(field.validations) {
    field.validations.forEach(validation=>{
      if(validation.type === 'required') {
        schema = schema.required(validation.message)
      }

      if(validation.type === 'minLength') {
        schema = schema.min((validation as any).value, validation.message)
      }

      if(validation.type === 'email') {
        schema = schema.email(validation.message)
      }
    })
  }
  requiredFields[field.name] = schema
})

const DynamicRegisterFormikPage = () => {
  return (
    <div>
      <h1>Formik Dynamic Register</h1>
      <Formik 
        initialValues={initialValues}
        validationSchema={Yup.object(requiredFields)}
        onSubmit={(values, { setSubmitting }) => console.log(values)}
      >
        {(formik) => (
          <Form noValidate>
            {jsonForm.map(({type,name,placeholder,label, options}) => {
              return (type === "text" || type === "password" || type === "email")? (
                <MyTextInput type={type as any} name={name} placeholder={placeholder} label={label} key={name}/>
              ) 
              : (type === "select")? 
              (
                <MySelectInput key={name} label={label} name={name}>
                  <option value="">Select an option</option>
                  {options?.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </MySelectInput>
              ) 
              : <p>Campo no soportado</p>
            })}

            <button type="submit">Submit</button>
            <button onClick={formik.handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DynamicRegisterFormikPage