import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type InformationFieldProps = {
  field: string;
  value?: string;
};

const InformationField: FC<InformationFieldProps> = ({ field, value }) => {
  return (
    <Box display="flex" flexDirection="row" gap="2rem">
      <Typography minWidth="12.4rem" fontWeight="bold" variant="title1">
        {field}:
      </Typography>
      <Typography sx={{ textTransform: 'capitalize' }} variant="title1">
        {value}
      </Typography>
    </Box>
  );
};

export default InformationField;
