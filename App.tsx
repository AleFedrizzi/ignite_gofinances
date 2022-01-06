import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { AppRouters } from './src/routes/app.routes';

import { SignIn } from './src/screens/SignIn';

import { AuthProvide, useAuth } from './src/hooks/auth';

// import 'intl';
// import 'intl/locale-data/jsonp/pt-BR';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const { userStorageLoading } = useAuth();

  if(!fontsLoaded || userStorageLoading) {
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      < StatusBar barStyle="light-content" />
      <AuthProvide>
        < Routes />
        </AuthProvide>
    </ThemeProvider>
  )
}