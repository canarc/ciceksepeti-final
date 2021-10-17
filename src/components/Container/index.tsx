import React, { FC } from 'react';
import { CustomContainer } from './styles';

const Container: FC = ({ children }) => {
  return <CustomContainer>{children}</CustomContainer>;
};

export default Container;
