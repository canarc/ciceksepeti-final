import React from 'react';
import Logo from '../../assets/Logo';
import { LightButton } from '../Button';
import { CustomHeader } from './styles';
import Plus from '../../assets/Header/Plus.svg';
import User from '../../assets/Header/User.svg';

const Header = () => {
  const isLoggedIn = false;
  return (
    <CustomHeader>
      <div className="content">
        <Logo width="12.894rem" />
        <div className="buttonContainer">
          <LightButton icon={Plus} label="Ürün Ekle" />
          {isLoggedIn ? <LightButton icon={User} label="Hesabım" /> : <LightButton label="Giriş Yap" />}
        </div>
      </div>
    </CustomHeader>
  );
};

export default Header;
