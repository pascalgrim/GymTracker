import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export default function MyDropDownPicker({
  items,
  setItems,
  value,
  setValue,
  onChange,
}) {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChange={onChange}
    />
  );
}
