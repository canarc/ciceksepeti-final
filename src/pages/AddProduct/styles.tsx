import { Box } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../constants/Size';

export const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 0.8rem;
  justify-content: space-between;
  padding-bottom: 17.7rem;
  position: relative;

  @media ${device.tablet} {
    flex-direction: column;
    & > div {
      padding: 2rem 1rem;
    }
  }
`;

export const InputContainer = styled(Box)`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: minmax(35.3rem, auto);

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-auto-columns: 100%;
  }
`;
