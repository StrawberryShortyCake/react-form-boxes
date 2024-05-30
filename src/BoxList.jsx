import { useState } from "react";
import NewBoxForm from "./NewBoxForm.jsx";
import Box from "./Box.jsx";
import { v4 as uuid } from "uuid";

/** AppComponent for summary
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * call list
 */
function BoxList() {
  return (
    <div>
      <NewBoxForm />
    </div>
  );
}

export default BoxList;
