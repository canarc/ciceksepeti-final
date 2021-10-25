import { Box } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../../constants/Size';

export const CustomModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background-color: rgba(75, 156, 226, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease-in-out;

  &.enter-done {
    opacity: 1;
    pointer-events: visible;
  }

  &.exit {
    opacity: 0;
  }
`;

export const ModalContent = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  width: 48rem;
  padding: 2rem !important;
  background-color: white;

  @media ${device.tablet} {
    padding: 1rem !important;
    width: calc(100% - 2rem);
    & > div {
      max-width: unset;
    }

    & > div > .MuiTypography-title5 {
      font-size: 1.8rem;
      line-height: 2.3rem;
    }

    & > div > .MuiTypography-title3 {
      font-size: 1.5rem;
      line-height: 2.3rem;
    }
  }
`;

export const ModalHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
