import { Checkbox as CheckboxMui, FormControlLabel } from "@mui/material";

const Checkbox = (props) => {
  const { id, label, value, onChange, required, disabled } = props;

  const handleValueChange = (event) => {
    if (onChange) onChange(event.target.checked, id);
  };

  return (
    <div>
      <FormControlLabel
        label={label}
        control={
          <CheckboxMui
            id={id}
            checked={value ?? false}
            onChange={handleValueChange}
            required={required}
            disabled={disabled}
            size="small"
          />
        }
      />
    </div>
  );
};

export default Checkbox;
