import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useState } from "react";

export default function MUIForm() {
  const [age, setAge] = useState(10);
  return (
    <form>
      <TextField
        required
        id="outline-required"
        label="Greeting"
        defaultValue="Hello World"
      />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Uncheck me"/>
    </form>
  );
}
