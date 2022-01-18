import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RootStack from './components/RootStack'
import store from './redux/store'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
    <Provider store={store}>
      <NavigationContainer>
       
          <RootStack />
          
      </NavigationContainer>
      </Provider>
      </SafeAreaProvider>
  )
}
export default App;

//createNativeStackNavigator