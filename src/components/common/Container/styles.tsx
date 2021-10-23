import { Box } from '@mui/material';
import styled from 'styled-components';

export const CustomContainer = styled(Box)`
  width: calc(100% - 2rem);
  height: calc(100% - 8rem);
  padding: 2rem 0 1rem 0;
  overflow: auto;
  max-width: 1480px;
  margin: auto;

  /*To hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
