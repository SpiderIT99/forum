import { TextField } from "@mui/material";
import { useState } from "react";

const Input = (props) => {
  const {
    autocomplete,
    customValidation,
    disabled,
    id,
    label,
    maxLength,
    onChange,
    required,
    type,
    value,
  } = props;
  const [error, setError] = useState();

  const handleValueChange = (event) => {
    if (onChange) onChange(event.target.value, id, maxLength);
  };

  const validate = () => {
    if (
      required &&
      (value === 0 || (typeof value === "string" && value?.length === 0))
    )
      setError("This field is required");
    else if (customValidation) setError(customValidation());
    else setError(undefined);
  };

  return (
    <TextField
      autoComplete={autocomplete ?? "off"}
      disabled={disabled}
      error={Boolean(error)}
      fullWidth
      helperText={error}
      id={id}
      label={label}
      onBlur={validate}
      onChange={handleValueChange}
      required={required}
      size="small"
      type={type}
      value={value ?? ""}
    />
  );
};

export default Input;
