import { styled, InputLabel, InputBase } from '@mui/material';

export const Label = styled(InputLabel)`
  letter-spacing: 0px;
  color: #525252;
  line-height: 2rem;
  font-size: 2rem;
  font-weight: 'regular';
  font-family: 'Nunito';

  &.Mui-focused {
    color: #525252;
  }
`;

export const Input = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: '2rem',
  },
  '& .MuiInputBase-input': {
    borderRadius: '8px',
    position: 'relative',
    backgroundColor: '#F4F4F4',
    fontSize: '1.6rem',
    lineHeight: '2.2rem',
    width: '100%',
    padding: '1.2rem 0 1.1rem 1.5rem',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      border: ' 1px solid #4B9CE2',
      backgroundColor: '#F0F8FF',
    },
  },
}));
