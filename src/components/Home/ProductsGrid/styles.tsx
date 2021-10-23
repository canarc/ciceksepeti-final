import { Box } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../../constants/Size';

export const CustomGrid = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 3rem;
  padding-bottom: 3rem;
  gap: 2rem;
  width: 100%;
  overflow: auto;

  @media ${device.mobileL} {
    margin-top: 2rem;
    gap: 0.9rem;
  }
`;
