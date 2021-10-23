import { Box } from '@mui/material';
import styled from 'styled-components';

export const CustomModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
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
  padding: 2rem;
  background-color: white;
`;

export const ModalHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
