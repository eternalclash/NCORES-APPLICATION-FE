import React from 'react'
// import createBottomTabNavigator from '@react-navigation/bottom-tabs'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen';
import MyProfileScreen from './MyProfileScreen';
import SkinTestScreen from './SkinTestScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
const Tab = createBottomTabNavigator();
const MainTab = () => {
 
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: '#009688',
        }}
        >
        <Tab.Screen name="홈" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                <Icon name="view-stream" size={size} color={color} />
                  )
        	}}  />
            <Tab.Screen name="피부기록" component={SkinTestScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="event" size={size} color={color}/>
               )
           }}
            />
            <Tab.Screen name="마이페이지" component={MyProfileScreen}
                options={{
                    tabBarIcon: ({ color, size })=> (
            <Icon name="search" size={size} color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}

export default MainTab
