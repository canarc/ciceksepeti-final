import { Box } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../constants/Size';

export const OfferContainer = styled(Box)`
  border-radius: 0.8rem;
  display: flex;
  border: 1px solid #f2f2f2;
  padding: 1rem;
  padding-right: 2rem;
  height: 10.4rem;
  margin: 0 2rem;
  gap: 1rem;
  align-items: center;
  white-space: nowrap;

  & > img {
    width: 7.8rem;
    height: 8.4rem;
    object-fit: contain;
  }

  @media ${device.tablet} {
    height: min-content;
  }
`;
