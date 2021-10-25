import { Box } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../constants/Size';

export const Container = styled(Box)`
  display: flex;
  width: 100%;
  height: 73.7rem;
  background-color: white;
  border-radius: 0.8rem;
  padding: 1.5rem;
  gap: 4.6rem;

  & > img {
    border-radius: 0.8rem;
    max-height: 73.7rem;
    max-width: 70rem;
    overflow: hidden;
    object-fit: cover;
  }

  @media ${device.tablet} {
    padding: 0.6rem;
    flex-direction: column;
    gap: 1rem;
    height: min-content;
    max-height: calc(100% - 7rem);
    overflow: auto;

    & > img {
      object-fit: contain;
      object-position: top center;
      min-height: 40vh !important;
      width: 100%;
    }

    & > div > .MuiBox-root {
      padding: 0;
      gap: 1rem;
      .MuiTypography-title1 {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    }

    .MuiTypography-title4 {
      font-size: 1.8rem;
      line-height: 2.3rem;
    }
  }
`;
