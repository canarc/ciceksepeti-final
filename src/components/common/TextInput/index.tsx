import { FormControl } from '@mui/material';
import React, { FC } from 'react';
import { Label, Input } from './styles';

type TextInputProps = {
  label: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  error?: boolean;
  showError?: boolean;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
  type?: string;
};

const TextInput: FC<TextInputProps> = ({ label, value, onChange, error = false, placeholder, multiline = false, rows = 1, maxLength = 100, type }) => {
  return (
    <FormControl error={error} style={{ width: '100%' }} variant="standard">
      <Label shrink htmlFor="text-input">
        {label}
      </Label>
      <Input
        type={type}
        rows={rows}
        multiline={multiline}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if (e.target.value.length < maxLength) {
            onChange(e);
          }
        }}
        id="text-input"
      />
    </FormControl>
  );
};

export default TextInput;
