import { useFormik } from "formik";
import FormItem from "./FormItem";
import constant from "../data/constant";
import menuSchema from "../schema";
import { addMenu, getAllParents } from "../utils/helper";
import useStore from "../store/useStore";

const MenuForm = () => {
  const { menu, setMenu } = useStore()
  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: constant.INITIAL_VALUE,
      validationSchema: menuSchema(menu),
      onSubmit: (values, { resetForm }) => {
        addMenu(menu, values, setMenu)
        resetForm()
      }
    });

  const handleLabelChange = (e) => {
    const { value } = e.target;
    handleChange(e);

    const generatedId = value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, "");

    setFieldValue("id", generatedId);
  };
  return (
    <form className="menu-form" onSubmit={handleSubmit}>
      <FormItem
        id={"menu-id"}
        name={"id"}
        title={"Menu Id"}
        changeHandler={handleChange}
        value={values.id}
        touched={touched.id}
        error={errors.id}
        required
        className={"hidden"}
      />
      <FormItem
        id={"menu-label"}
        name={"label"}
        title={"Menu Name"}
        changeHandler={handleLabelChange}
        value={values.label}
        touched={touched.label}
        error={errors.label}
        required
      />
      <FormItem
        id={"menu-icon"}
        name={"icon"}
        title={"Menu Icon"}
        changeHandler={handleChange}
        value={values.icon}
        touched={touched.icon}
        error={errors.icon}
      />
      <FormItem
        id={"parent"}
        name={"parent"}
        title={"Parent"}
        changeHandler={handleChange}
        value={values.parent}
        touched={touched.parent}
        error={errors.parent}
        type="dropdown"
        options={getAllParents(menu)}
        required
      />
      <FormItem
        id={"menu-link"}
        name={"link"}
        title={"Link"}
        changeHandler={handleChange}
        value={values.link}
        touched={touched.link}
        error={errors.link}
        required
      />
      <button className="form-btn" type="submit">Submit</button>
    </form>
  );
};

export default MenuForm;
