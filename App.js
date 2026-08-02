import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';

export default function App() {
  // which screen to show (login / dashboard / profile)
  const [screen, setScreen] = useState('login');

  if (screen === 'login') {
    return <LoginScreen onLoginSuccess={() => setScreen('dashboard')} />;
  }

  if (screen === 'dashboard') {
    return (
      <DashboardScreen onNavigateToProfile={() => setScreen('profile')} />
    );
  }

  if (screen === 'profile') {
    return (
      <ProfileScreen
        onGoBack={() => setScreen('dashboard')}
        onLogout={() => setScreen('login')}
      />
    );
  }

  return null;
}
