import { useState } from "react";

/** Form for a new box.
 *
 * Props:
 *
 * State:
 *
 * Purpose:
 *
 * Structure:
 */

function NewBoxForm({ props_placeholder }){

    const initialState = {
        height:"", width:"", backgroundColor:""
    }
    const [formData, setFormData] = useState(initialState)

    function handleChange(evt){
        const { name, value } = evt.target
        console.log("handle change", evt.target)

        setFormData(formData => ({
            ...formData,
            [name]:value
        }))
    }

    function handleSubmit(evt){
        evt.preventDefault()
        console.log("submitting a form", evt.target)
    }

    return(
        <div>
            <h1>Boxy-Topsy</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="height"></label>
                <input
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />
                <label htmlFor="width"></label>
                <input
                    id="width"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />
                <label htmlFor="bg-color"></label>
                <input
                    id="bg-color"
                    name="bg-color"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
                <button>
                    Add a new box!
                </button>
            </form>
        </div>
    )

}

export default NewBoxForm