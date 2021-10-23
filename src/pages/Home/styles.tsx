import { Tabs } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../constants/Size';

export const Banner = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

export const CustomTabs = styled(Tabs)`
  .MuiTabs-flexContainer {
    border-bottom: 1px solid #e0e0e0;
    gap: 4.7rem;
    justify-content: start;

    & > button {
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 2.4rem;
      color: #525252;
      text-transform: capitalize;
      min-width: unset;
      min-height: unset;
      height: 3.1rem;
      padding: 0;
      width: min-content !important;
    }

    @media ${device.tablet} {
      gap: 2.5rem;
    }
  }

  .MuiTabs-indicator  {
    top: 3.05rem;
    background-color: #4b9ce2;
  }

  margin-top: 3rem;

  @media ${device.mobileL} {
    margin-top: 2rem;
  }
`;
