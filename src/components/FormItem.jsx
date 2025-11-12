import { useMemo } from "react";

const FormItem = ({
  name,
  id,
  title,
  value,
  changeHandler,
  touched,
  error,
  type = "text",
  options = [],
  required = false,
  className = ""
}) => {
  const updatedOptions = useMemo(() => {
    if (options.length > 0) {
      return [
        {
          id: "#",
          label: "Not Applicable",
        },
        ...options,
      ];
    }
    return [];
  }, [options]);

  return (
    <div className="form-item">
      {type === "text" ? (
        <>
          <label className="form-label required" htmlFor={id}>{title}</label>
          <input className="form-input form-text" name={name} id={id} value={value} onChange={changeHandler} />
        </>
      ) : (
        <>
          <label className="form-label" htmlFor={id}>{title}</label>
          <select className="form-input form-select"id={id} name={name} value={value} onChange={changeHandler}>
            {updatedOptions.map((opt, idx) => (
              <option className="form-dropdown" value={opt.id} key={idx + 1}>
                {opt.label}
              </option>
            ))}
          </select>
        </>
      )}
      {touched && error && <p className="error">{error}</p>}
    </div>
  );
};

export default FormItem;
