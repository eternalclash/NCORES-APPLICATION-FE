import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RootStack from './components/RootStack'
import store from './redux/store'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { LogBox } from 'react-native'
const App = () => {
  const Stack = createNativeStackNavigator();
  console.disableYellowBox = true; 
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

LogBox.ignoreLogs(['Console Warning']);
//createNativeStackNavigator