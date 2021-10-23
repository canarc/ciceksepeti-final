import { ButtonProps } from '@mui/material';
import { FC } from 'react';
import { CustomDarkButton, CustomLightButton } from './styles';

interface ContainedButtonProps extends ButtonProps {
  label: string;
  icon?: string;
}

export const DarkButton: FC<ContainedButtonProps> = ({ onClick, disabled, icon, label, sx }) => {
  return (
    <CustomDarkButton onClick={onClick} sx={sx} disabled={disabled} variant="contained">
      {icon && <img style={{ height: '1.3rem' }} src={icon} alt="icon" />}
      <p>{label}</p>
    </CustomDarkButton>
  );
};

export const LightButton: FC<ContainedButtonProps> = ({ onClick, disabled, icon, label, sx }) => {
  return (
    <CustomLightButton onClick={onClick} sx={sx} disabled={disabled} variant="contained">
      {icon && <img style={{ height: '1.3rem' }} src={icon} alt="icon" />}
      <p>{label}</p>
    </CustomLightButton>
  );
};
