import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignInScreen from './SignInScreen';

const RootStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ headerShown: false }}
            />
      </Stack.Navigator>  
    )
}

export default RootStack
