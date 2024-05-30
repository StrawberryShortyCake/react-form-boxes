import { useState } from "react";

/** Form for a new box.
 *
 * Props: TODO: fill out
 *
 * State:
 *
 * Purpose:
 *
 * Structure:
 */

function NewBoxForm({ addNewBox }) {
  const initialState = {
    height: "",
    width: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("handle change", evt.target);

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("submitting a form", evt.target);
    addNewBox({
      height: formData.height,
      width: formData.width,
      backgroundColor: formData.backgroundColor,
    });

    setFormData(initialState);
  }

  return (
    <div>
      <h1>Boxy-Topsy</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="height">Height</label>
        <input
          id="NewBoxForm-height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <label htmlFor="width">Width</label>
        <input
          id="NewBoxForm-width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
        <label htmlFor="bg-color">Background Color</label>
        <input
          id="NewBoxForm-bg-color"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
        <button>Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
