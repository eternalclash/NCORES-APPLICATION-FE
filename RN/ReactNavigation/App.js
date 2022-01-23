import React, { useEffect } from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RootStack from './components/RootStack'
import store from './redux/store'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { LogBox } from 'react-native'
import { stripLeadingSlash } from 'history/PathUtils'
import SplashScreen from 'react-native-splash-screen'
const App = () => {
  const Stack = createNativeStackNavigator();
  console.disableYellowBox = true; 
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    },500)
   
  },[])
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