import { FormControl } from '@mui/material';
import React, { FC } from 'react';
import { Label, Input } from './styles';

type TextInputProps = {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  error?: boolean;
  showError?: boolean;
};

const TextInput: FC<TextInputProps> = ({ label, value, onChange, error = false }) => {
  return (
    <FormControl error={error} style={{ width: '100%' }} variant="standard">
      <Label shrink htmlFor="text-input">
        {label}
      </Label>
      <Input value={value} onChange={onChange} id="text-input" />
    </FormControl>
  );
};

export default TextInput;
