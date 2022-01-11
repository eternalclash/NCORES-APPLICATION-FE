import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RootStack from './components/RootStack'
import store from './redux/store'
import { Provider } from 'react-redux'
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootStack/>
      </NavigationContainer>
      </Provider>
  )
}
export default App;

//createNativeStackNavigator