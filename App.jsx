import React, { useContext } from 'react'
import AuthProvider, { AuthContext } from './Src/Context/AuthContext'
import { NavigationContainer } from '@react-navigation/native';
import UnAuthStack from './Src/Navigations/UnAuthStack';
import AuthStack from './Src/Navigations/AuthStack';
import "./global.css"
function AppNavigator() {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthStack /> : <UnAuthStack />}
    </NavigationContainer>
  );
}
const App = () => {
  return (
    <AuthProvider>
      <AppNavigator/>
    </AuthProvider>
  )
}

export default App