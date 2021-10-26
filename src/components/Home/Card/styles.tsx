import { Box } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../../constants/Size';

export const CustomCard = styled(Box)`
  cursor: pointer;
  position: relative;
  height: 39.2rem;
  width: 28rem;
  background-color: white;
  border-radius: 0.8rem;
  padding: 1rem;

  & > span:last-child {
    position: absolute;
    bottom: 1rem;
  }

  & > img {
    display: block;
    margin: auto;
    border-radius: 0.8rem;
    object-fit: contain;
    height: 29.7rem;
    max-width: 26rem;
    margin-bottom: 0.5rem;
  }

  @media ${device.mobileL} {
    width: 17.3rem;
    height: 26.6rem;
    padding: 0.6rem;

    & > img {
      height: 18.4rem;
      margin-bottom: 1rem;
    }

    .MuiTypography-title3,
    .MuiTypography-title2 {
      font-size: 1.5rem;
      line-height: 1.2rem;
    }

    .MuiTypography-subTitle1 {
      font-size: 1rem;
      line-height: 2.2rem;
    }
  }
`;

export const TitleContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
