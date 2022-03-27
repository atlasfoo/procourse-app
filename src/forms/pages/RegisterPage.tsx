import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

const RegisterPage = () => {

  const {
    name, email, password, passwordConfirm,
    formData,
    onFieldChange, resetForm
  } = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }
  
  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input type="text" placeholder="Name" name="name" value={name} onChange={onFieldChange}/>
        <input type="email" placeholder="Email" name="email" value={email} onChange={onFieldChange}/>
        <input type="password" placeholder="Password" name="password" value={password} onChange={onFieldChange}/>
        <input type="password" placeholder="Repeat Password" name="passwordConfirm" value={passwordConfirm} onChange={onFieldChange}/>

        <button type="submit" value="" >Register</button>
        <button value="" onClick={resetForm}>Reset</button>
      </form>
    </div>
  )
}

export default RegisterPage