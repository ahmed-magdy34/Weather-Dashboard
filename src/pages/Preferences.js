import React from "react";
import { Formik, Form, Field } from "formik";

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    const savedPreferences = JSON.parse(
      localStorage.getItem("preferences")
    ) || { city: "", unit: "Celsius" };
    this.state = {
      city: savedPreferences.city,
      unit: savedPreferences.unit,
    };
  }

  handleSavePreferences = (values) => {
    const preferences = {
      city: values.city,
      unit: values.unit,
    };
    localStorage.setItem("preferences", JSON.stringify(preferences));
    this.setState(preferences);
  };

  render() {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">User Preferences</h2>
        <Formik
          initialValues={{ city: this.state.city, unit: this.state.unit }}
          onSubmit={(values) => {
            this.handleSavePreferences(values);
          }}
        >
          {() => (
            <Form className="flex flex-col items-start">
              <label className="mt-2">Preferred City:</label>
              <Field
                type="text"
                name="city"
                placeholder="Enter preferred city"
                className="p-2 border border-gray-300 rounded mt-1"
              />

              <label className="mt-4">Measurement Unit:</label>
              <Field
                as="select"
                name="unit"
                className="p-2 border border-gray-300 rounded mt-1"
              >
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
              </Field>

              <button
                type="submit"
                className="mt-6 p-2 bg-blue-500 text-white rounded"
              >
                Save Preferences
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Preferences;
