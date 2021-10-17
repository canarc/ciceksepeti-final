import { Box } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../constants/Size';

export const CustomContainer = styled(Box)`
  width: 100%;
  max-width: 1480px;
  margin: auto;

  @media ${device.tablet} {
    width: calc(100% - 2rem);
    margin: 0px 1rem;
  }
`;
