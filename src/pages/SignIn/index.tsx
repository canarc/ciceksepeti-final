import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../assets/Logo';
import Background from '../../assets/SignIn/Background.png';
import { DarkButton } from '../../components/common/Button';
import TextInput from '../../components/common/TextInput';
import { toastConfig } from '../../constants/Toast';
import { setCookie } from '../../helpers/cookie';
import { CheckEmail, CheckPassword } from '../../helpers/validation';
import AuthService from '../../redux/services/authService/api';
import { BackgroundImage, Card, RightContainer, TitleContainer } from './styles';

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    checkFields();
  }, [email, password]);

  const checkFields = () => {
    if (email.length) setEmailError(!CheckEmail(email));
    if (password.length) setPasswordError(!CheckPassword(password));
  };

  const onSubmit = async () => {
    if (email.length && password.length && !emailError && !passwordError) {
      try {
        const response = await AuthService.SignIn({ email, password });
        setCookie('token', JSON.stringify({ email: email, token: response.access_token }), 1);
        history.push('/');
      } catch {
        toast.error('Lütfen email ve şifrenizi kontrol edin.', toastConfig);
      }
    } else {
      toast.error('Lütfen email ve şifrenizi kontrol edin.', toastConfig);
    }
  };

  return (
    <Box style={{ width: '100%', height: '100%' }} display="flex" flexDirection="row">
      <BackgroundImage src={Background} alt="background" />
      <RightContainer>
        <Logo />
        <Card>
          <Box display="flex" flexDirection="column" gap="1.5rem" width="min(38.9rem,100%)" justifyContent="center" margin="auto">
            <TitleContainer>
              <Typography variant="title">Giriş Yap</Typography>
              <Typography variant="title1">Fırsatlardan yararlanmak için giriş yap!</Typography>
            </TitleContainer>
            <TextInput error={emailError} value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
            <TextInput error={passwordError} value={password} onChange={(e) => setPassword(e.target.value)} label="Şifre" />
            <Link style={{ textAlign: 'end', textDecoration: 'none' }} to="/forgotPassword">
              <Typography variant="subTitle">Şifremi Unuttum</Typography>
            </Link>
            <DarkButton onClick={onSubmit} sx={{ marginTop: '1.5rem' }} label="Giriş Yap" />
            <Typography mt="0.5rem" variant="title1">
              Hesabın yok mu?
              <Link className="titleLink" to="signup">
                Üye Ol
              </Link>
            </Typography>
          </Box>
        </Card>
      </RightContainer>
    </Box>
  );
};

export default SignIn;
