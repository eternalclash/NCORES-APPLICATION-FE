import React,{useState,useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPage from './MyPage';
import MyLogOut from './MyLogOut';
import SignInScreen from '../SignInScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


function MyPageStack({navigation,route}) {
    const Stack = createNativeStackNavigator();
    React.useLayoutEffect(() => {
        
        const routeName = getFocusedRouteNameFromRoute(route);
        console.log(routeName)
        if (routeName === "SignIn") {
            navigation.setOptions({tabBarVisible: false});
        }else {
            navigation.setOptions({tabBarVisible: true});
        }
    }, [navigation, route]);
  return (
    <Stack.Navigator>
          <Stack.Screen
              name="MyPage"
              component={MyPage}
              options={{headerShown:false}}
          />
      <Stack.Screen
        name="MyLogOut"
        component={MyLogOut}
        options={{title: ''}}
          />
         
    </Stack.Navigator>
  );
}

export default MyPageStack;