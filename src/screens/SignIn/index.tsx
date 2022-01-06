import React, { useContext } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";

import { SignInSocialButton } from "../../components/SignInSocialButton";

import { 
  Container,
  Header,
  TitleWrapper,
  Title,
  SignTitle,
  Footer,
  FooterWrapper,

} from "./styles";

import { Alert } from "react-native";

export function SignIn(){
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
      
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar com a conta Google');
    }
  }

  return(
    <Container>

      <Header>
        <TitleWrapper>
          <LogoSvg 
            width={RFValue(120)}
            height={RFValue(68)}
          />
        </TitleWrapper>

        <Title>
          Controle suas {'\n'}
          finanças de forma {'\n'}
          muito simples {'\n'}
        </Title>

        <SignTitle>
          Faça o seu login com {'\n'}
          uma das contas abaixo {'\n'}
        </SignTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton 
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />

          <SignInSocialButton 
            title="Entrar com Apple"
            svg={AppleSvg }
          />
        </FooterWrapper>
      </Footer>
      
    </Container>
  );
}