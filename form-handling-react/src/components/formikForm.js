import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  // Define initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Formik Form Submitted:", values);

    // Simulate API call or other side effects
    setTimeout(() => {
      alert("Form successfully submitted!");
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
