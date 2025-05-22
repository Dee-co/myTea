import React, { createContext, useState } from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';

export const AuthContext = createContext({
  isLoggedIn: false,
  loginWithBiometrics: async () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginWithBiometrics = async () => {
    const rnBiometrics = new ReactNativeBiometrics()
    try {
      const { available, biometryType } = await rnBiometrics.isSensorAvailable();

      if (!available) {
        alert('Biometric sensor not available');
        setIsLoggedIn(true);
        return true;
        // return false;
      }

      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: 'Authenticate with Fingerprint',
        cancelButtonText: 'Cancel',
      });

      if (success) {
        setIsLoggedIn(true);
        return true;
      } else {
        alert('Authentication cancelled');
        return false;
      }
    } catch (error) {
      console.error('Biometric error:', error);
      alert('Authentication failed');
      return false;
    }
  };

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginWithBiometrics, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
