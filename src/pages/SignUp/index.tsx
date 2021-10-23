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
        setCookie('token', response.access_token, 1);
        history.go(-1);
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
              <Typography variant="title">Üye Ol</Typography>
              <Typography variant="title1">Fırsatlardan yararlanmak için üye ol!</Typography>
            </TitleContainer>
            <TextInput error={emailError} value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
            <TextInput error={passwordError} value={password} onChange={(e) => setPassword(e.target.value)} label="Şifre" />

            <DarkButton onClick={onSubmit} sx={{ marginTop: '1.5rem' }} label="Üye Ol" />
            <Typography mt="0.5rem" variant="title1">
              Hesabın var mı ?
              <Link className="titleLink" to="signup">
                Giriş Yap
              </Link>
            </Typography>
          </Box>
        </Card>
      </RightContainer>
    </Box>
  );
};

export default SignIn;
