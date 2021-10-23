import React from 'react';
import Logo from '../../../assets/Logo';
import { LightButton } from '../Button';
import { CustomHeader } from './styles';
import Plus from '../../../assets/Header/Plus.svg';
import User from '../../../assets/Header/User.svg';
import { getCookie } from '../../../helpers/cookie';
import { useHistory } from 'react-router';

const Header = () => {
  const token = getCookie('token');
  const history = useHistory();

  return (
    <CustomHeader>
      <div className="content">
        <Logo width="12.894rem" onClick={() => history.push('/')} />
        <div className="buttonContainer">
          {token ? (
            <>
              <LightButton icon={Plus} onClick={() => history.push('/addProduct')} label="Ürün Ekle" />
              <LightButton icon={User} onClick={() => history.push('/account')} label="Hesabım" />
            </>
          ) : (
            <LightButton
              icon={User}
              onClick={() => {
                history.push('/signIn');
              }}
              label="Giriş Yap"
            />
          )}
        </div>
      </div>
    </CustomHeader>
  );
};

export default Header;
