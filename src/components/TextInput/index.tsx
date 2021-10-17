import { FormControl } from '@mui/material';
import React, { FC } from 'react';
import { Label, Input } from './styles';

type TextInputProps = {
  label: string;
};

const TextInput: FC<TextInputProps> = ({ label }) => {
  return (
    <FormControl style={{ width: '100%' }} variant="standard">
      <Label shrink htmlFor="text-input">
        {label}
      </Label>
      <Input id="text-input" />
    </FormControl>
  );
};

export default TextInput;
