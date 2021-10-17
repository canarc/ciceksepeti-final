import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Background from '../../assets/SignIn/Background.png';
import { DarkButton } from '../../components/Button';
import TextInput from '../../components/TextInput';
import { BackgroundImage, Card, RightContainer, TitleContainer } from './styles';

const SignUp = () => {
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
            <TextInput label="Email" />
            <TextInput label="Şifre" />
            <DarkButton sx={{ marginTop: '1.5rem' }} label="Giriş Yap" />
            <Typography mt="0.5rem" variant="title1">
              Hesabın var mı?
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

export default SignUp;
