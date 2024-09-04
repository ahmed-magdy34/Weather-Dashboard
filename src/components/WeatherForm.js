import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

class WeatherForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ city: "" }}
        validationSchema={Yup.object({
          city: Yup.string()
            .required("City name is required")
            .matches(/^[a-zA-Z\s]+$/, "Invalid city name"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          this.props.onSearch(values.city);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center">
            <Field
              type="text"
              name="city"
              placeholder="Enter city name"
              className="p-2 border border-gray-300 rounded"
            />
            <ErrorMessage
              name="city"
              component="div"
              className="text-red-500 mt-2"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default WeatherForm;
