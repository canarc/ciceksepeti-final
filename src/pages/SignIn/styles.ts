import { Box } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../constants/Size';

export const BackgroundImage = styled.img`
  width: 83.5rem;
  object-fit: cover;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Card = styled(Box)`
  width: 56.9rem;
  height: 55.4rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 12px #1e36480a;
  border-radius: 8px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${device.tablet} {
    width: calc(100% - 2rem);
    margin: 0px auto;
    padding: 2.1rem;
  }

  .titleLink {
    font-weight: 600;
    color: #4b9ce2;
    text-decoration: none;
    margin-left: 5px;
  }
`;

export const RightContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5.563rem;
  background-color: #fff;

  @media ${device.tablet} {
    background-color: #f2f2f2;
  }
`;

export const TitleContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-bottom: 5rem;

  @media ${device.tablet} {
    margin-bottom: 3rem;
  }
`;
