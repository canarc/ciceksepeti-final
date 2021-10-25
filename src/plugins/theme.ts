/* eslint-disable no-shadow */
import { createTheme, ThemeOptions } from '@mui/material';

const fontScale = 1;

export type ITheme = typeof AppColors;
interface ITypography {
  title: {};
  title1: {};
  title2: {};
  title3: {};
  title4: {};
  title5: {};
  title6: {};
  subTitle: {};
  subTitle1: {};
  subTitle2: {};
  subTitle3: {};
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

export const AppColors = {
  primary: '#fff',
  paper: '#fff',
  paperSecondary: '#f2f2f2',
  textPrimary: '#525252',
  textBlue: '#4B9CE2',
  textSecondary: '#B1B1B1',
  textTertiary: '#3E3E3E',
  textFourth: '#555555',
  textFifth: '#99A0A7',
  textSixth: '#B1B1B1',
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
    title2: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '2.2rem',
      color: AppColors.textBlue,
    },
    title3: {
      fontWeight: 600,
      fontSize: '1.8rem',
      lineHeight: '2.2rem',
      color: AppColors.textTertiary,
    },
    title4: {
      fontWeight: 400,
      fontSize: '3.4rem',
      lineHeight: '2.3rem',
      color: AppColors.textFourth,
    },
    title5: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: '2.3rem',
      color: AppColors.textPrimary,
    },
    title6: {
      fontWeight: 600,
      fontSize: '1.6rem',
      lineHeight: '2.2rem',
      color: AppColors.textPrimary,
    },
    subTitle: {
      fontSize: '1.2rem',
      fontWeight: 400,
      lineHeight: '1.6rem',
      color: AppColors.textSecondary,
    },
    subTitle1: {
      fontSize: '1.3rem',
      fontWeight: 400,
      lineHeight: '2.2rem',
      color: AppColors.textTertiary,
    },
    subTitle2: {
      fontSize: '1.3rem',
      fontWeight: 400,
      lineHeight: '1.6rem',
      color: AppColors.textFourth,
    },
    subTitle3: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: '2.3rem',
      color: AppColors.textFourth,
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
