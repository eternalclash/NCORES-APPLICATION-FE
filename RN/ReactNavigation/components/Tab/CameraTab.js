import React from 'react'
import createBottomTabNavigator from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';
const CameraTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'black',
        }}
        >
            
        </Tab.Navigator>
    )
}

export default CameraTab
