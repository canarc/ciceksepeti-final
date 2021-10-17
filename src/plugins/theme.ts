/* eslint-disable no-shadow */
import { createTheme, ThemeOptions } from '@mui/material';

export interface ITheme {
  primary: string;
  paper: string;
  textPrimary: string;
  textSecondary: string;
}

interface ITypography {
  title: {};
  title1: {};
  subTitle: {};
}

interface IPalette {
  paper: true;
}

declare module '@mui/material' {
  interface Theme extends ITheme {}
  interface ThemeOptions extends ITheme {}
  interface TypographyPropsVariantOverrides extends ITypography {}
  interface ButtonPropsColorOverrides extends IPalette {}
}

export const AppColors: ITheme = {
  primary: '#fff',
  paper: '#fff',
  textPrimary: '#525252',
  textSecondary: '#B1B1B1',
};

const commonTheme = {
  ...AppColors,
  palette: {
    root: {
      color: AppColors.primary,
    },
    background: {
      default: AppColors.primary,
      paper: AppColors.paper,
      button: AppColors.textPrimary,
    },
  },

  typography: {
    fontFamily: "'Nunito'",
    title: {
      fontWeight: 600,
      fontSize: '3.2rem',
      lineHeight: '4.3rem',
      color: AppColors.textPrimary,
    },
    title1: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: '2rem',
      color: AppColors.textPrimary,
    },
    subTitle: {
      fontSize: '1.2rem',
      fontWeight: 400,
      lineHeight: '1.6rem',
      color: AppColors.textSecondary,
    },
  },

  components: {
    MuiTextField: {
      backgroundColor: 'red',
    },
  },
} as ThemeOptions;

const theme = createTheme(commonTheme);

export default theme;
