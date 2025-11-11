import { useFormik } from "formik"
import FormItem from "./FormItem"
import constant from "../data/constant"


const MenuForm = () => {
    const { values, touched, errors, handleChange, handleSubmit } = useFormik({
        initialValues: constant.INITIAL_VALUE,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })
  return (
    <form className='menu-form' onSubmit={handleSubmit}>
        <FormItem id={"field-name"} name={"label"} title={"Menu Name"} changeHandler={handleChange} value={values.label}/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default MenuForm