import { Button } from '@mui/material';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  &.MuiButton-root {
    border-radius: 0.8rem;
    height: 4.5rem;
    font-size: 1.8rem;
    letter-spacing: 0px;
    line-height: 24px;
    font-weight: bold;
    text-transform: capitalize;
    box-shadow: none;
  }

  & > img {
    margin-right: 0.61rem;
  }
`;

export const CustomDarkButton = styled(CustomButton)`
  &.MuiButton-root {
    background-color: #4b9ce2;
  }

  &:hover {
    background-color: #f0f8ff;
    color: #4b9ce2;
  }
`;

export const CustomLightButton = styled(CustomButton)`
  &.MuiButton-root {
    background-color: #f0f8ff;
    color: #4b9ce2;
  }

  &:hover {
    background-color: #4b9ce2;
    color: white;
  }
`;
