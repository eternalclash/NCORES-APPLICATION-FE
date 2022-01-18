import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPage from './MyPage';
import MyLogOut from './MyLogOut';
import SignInScreen from '../SignInScreen';



function MyPageStack() {
    const Stack = createNativeStackNavigator();
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
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                 headerShown:false
              }}/>
    </Stack.Navigator>
  );
}

export default MyPageStack;