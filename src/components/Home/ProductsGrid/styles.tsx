import { Box } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../../constants/Size';

export const CustomGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 28rem);

  margin-top: 3rem;
  padding-bottom: 3rem;
  justify-content: space-around;
  gap: 2rem;
  width: 100%;
  overflow: auto;

  @media ${device.mobileL} {
    margin-top: 0;
    grid-template-columns: repeat(auto-fit, 17.3rem);
    gap: 0.9rem;
  }
`;
