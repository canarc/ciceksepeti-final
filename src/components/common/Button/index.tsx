import { ButtonProps } from '@mui/material';
import { FC } from 'react';
import { CustomDarkButton, CustomLightButton } from './styles';

interface ContainedButtonProps extends ButtonProps {
  label: string;
  icon?: string;
  bgColor?: 'error';
}

export const DarkButton: FC<ContainedButtonProps> = ({ onClick, disabled, icon, label, sx, fullWidth, bgColor }) => {
  return (
    <CustomDarkButton onClick={onClick} sx={sx} disabled={disabled} variant="contained" fullWidth={fullWidth} color={bgColor}>
      {icon && <img style={{ height: '1.3rem' }} src={icon} alt="icon" />}
      {label && <p>{label}</p>}
    </CustomDarkButton>
  );
};

export const LightButton: FC<ContainedButtonProps> = ({ onClick, disabled, icon, label, sx, fullWidth }) => {
  return (
    <CustomLightButton onClick={onClick} sx={sx} disabled={disabled} variant="contained" fullWidth={fullWidth}>
      {icon && <img style={{ height: '1.3rem' }} src={icon} alt="icon" />}
      {label && <p>{label}</p>}
    </CustomLightButton>
  );
};
