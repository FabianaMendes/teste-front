import React from 'react';
import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <GlobalStyles/>
      <Routes />
    </AuthProvider>
  );
}

