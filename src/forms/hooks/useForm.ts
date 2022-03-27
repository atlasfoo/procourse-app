import { ChangeEvent, useState } from "react"

export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState(initialState)


  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const resetForm = () => {
    setFormData({...initialState})
  }

  return {
    ...formData,
    //props
    formData,
    //methods
    onFieldChange,
    resetForm
  }
}