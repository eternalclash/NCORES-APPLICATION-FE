import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RootStack from './components/RootStack'
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack/>
  </NavigationContainer>
  )
}
export default App;

//createNativeStackNavigator