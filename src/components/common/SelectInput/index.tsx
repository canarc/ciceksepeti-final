import { FormControl, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Label, CustomSelect } from './styles';

type SelectProps = {
  label: string;
  value: string | undefined;
  onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
  error?: boolean;
  showError?: boolean;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  options: { title: string; id: string }[];
};

const SelectInput: FC<SelectProps> = ({ label, options, value, onChange, error = false, placeholder, multiline = false, rows = 1 }) => {
  return (
    <FormControl error={error} style={{ width: '100%' }} variant="standard">
      <Label shrink htmlFor="text-input">
        {label}
      </Label>

      <CustomSelect variant="outlined" value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem value={option.id} sx={{ textTransform: 'capitalize' }}>
            {option.title}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default SelectInput;
