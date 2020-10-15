import React, { useState } from "react";

export default function DropdownComponent(props) {
  const [value, setValue] = useState();
  //TODO:add object with label and id and append to categories as first object.
  return (
    <select value={value} onChange={e => props.clickFunction(e.currentTarget.value)}>
      {props.categories.map(({ label, value, id }) => (
        <option key={value} value={id}>
          {label}
        </option>
      ))}
    </select>
  );
}
