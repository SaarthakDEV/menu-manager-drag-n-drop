

const FormItem = ({name, id, title, value, changeHandler, touched, error, type, options}) => {
  return (
    <div className="form-item">
      <label htmlFor={id} >{title}</label>
      <input name={name} id={id} value={value} onChange={changeHandler}/>
      {
        touched && error && <p className="error">{error}</p>
      }
    </div>
  )
}

export default FormItem