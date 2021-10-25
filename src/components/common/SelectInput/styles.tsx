import { styled, InputLabel, Select } from '@mui/material';

export const Label = styled(InputLabel)`
  position: absolute;
  left: 0;
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

export const CustomSelect = styled(Select)(({ theme }) => ({
  borderRadius: '0.8rem',
  backgroundColor: '#F4F4F4',
  textTransform: 'capitalize',

  'label + &': {
    marginTop: '2rem',
  },

  '& .MuiInputBase-input': {
    borderRadius: '8px',
    position: 'relative',
    fontSize: '1.6rem',
    lineHeight: '2.2rem',
    width: '100%',
    padding: '1.2rem 0 1.1rem 1.5rem',
  },

  '& div': {
    fontSize: '1.6rem',
    lineHeight: '2.2rem',
    color: '#99A0A7',
  },

  '&.Mui-error .MuiInputBase-input': {
    backgroundColor: '#FFE5E5',
    borderColor: '#F77474',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: '3px solid #F4F4F4',
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: '3px solid #4B9CE2',
  },
}));
