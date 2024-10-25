import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps"; 
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      number: Yup.string()
        .matches(
          /^\d{3}-\d{3}-\d{4}$/,
          "Phone number must be in xxx-xxx-xxxx format"
        )
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label className={styles.label} htmlFor="name">
        Name
      </label>
      <input
        className={styles.input}
        id="name"
        name="name"
        type="text"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className={styles.error}>{formik.errors.name}</div>
      ) : null}

      <label className={styles.label} htmlFor="number">
        Number
      </label>
      <input
        className={styles.input}
        id="number"
        name="number"
        type="text"
        placeholder="xxx-xxx-xxxx"
        {...formik.getFieldProps("number")}
      />
      {formik.touched.number && formik.errors.number ? (
        <div className={styles.error}>{formik.errors.number}</div>
      ) : null}

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
