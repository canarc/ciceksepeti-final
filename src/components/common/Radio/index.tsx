import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import { CheckboxContainer } from './styles';

type RadioButtonProps = {
  value?: number;
  options: { value: number; title: string }[];
  onSelect: (selectedValue: number | undefined) => void;
};

const Radio: FC<RadioButtonProps> = ({ value, onSelect, options }) => {
  return (
    <Box display="flex" flexDirection="column" gap="1.5rem">
      {options.map((button) => (
        <CheckboxContainer key={button.value} onClick={() => onSelect(button.value)}>
          <input className="myCheckbox" type="checkbox" checked={value === button.value} onChange={(e) => onSelect(button.value)} />
          <label htmlFor="checkbox" />
          <Typography style={{}} variant="title1" marginLeft="2.5rem">
            {button.title}
          </Typography>
        </CheckboxContainer>
      ))}
    </Box>
  );
};

export default Radio;
