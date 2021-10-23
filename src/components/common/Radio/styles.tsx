import { Box } from '@mui/material';
import styled from 'styled-components';

export const CheckboxContainer = styled(Box)`
  position: relative;
  height: 4.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f0f8ff;
    border-color: #4b9ce2;
  }

  label {
    background-color: #fff;
    border: 1px solid #b1b1b1;
    border-radius: 50%;
    cursor: pointer;
    height: 2rem;
    left: 1rem;
    position: absolute;
    top: 1.15rem;
    width: 2rem;
  }

  label:after {
    border: 0.2rem solid #fff;
    border-top: none;
    border-right: none;
    content: '';
    height: 0.5rem;
    left: 0.4rem;
    opacity: 0;
    position: absolute;
    top: 0.5rem;
    transform: rotate(-45deg);
    width: 1rem;
  }

  input[type='checkbox'] {
    visibility: hidden;
  }

  input[type='checkbox']:checked + label {
    background-color: #4b9ce2;
    border-color: #b1b1b1;
  }

  input[type='checkbox']:checked + label:after {
    opacity: 1;
  }
`;
