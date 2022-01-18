import React from 'react'
// import createBottomTabNavigator from '@react-navigation/bottom-tabs'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen';
import MyProfileScreen from './MyProfileScreen';
import SkinTestScreen from './SkinTestScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import MainPage from '../MainPage';
import MyLogOut from '../MyPage/MyLogOut';
import MyPageStack from '../MyPage/MyPageStack';
const Tab = createBottomTabNavigator();
const MainTab = () => {
 
    return (
        <Tab.Navigator
            tabBarOptions={{
                tabBarLabelStyle: {
                    fonSize: 15,
                    headerShown: false,
                },
                headerShown: false,
                activeTintColor: '#009688',
        }}
        >
            <Tab.Screen name="홈" component={MainPage} options={{
               
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" size={size} color={color} />
                ),
                
                headerShown: false,
            
        	}}  />
            <Tab.Screen name="피부기록" component={SkinTestScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="event" size={size} color={color}/>
               )
           }}
            />
           <Tab.Screen name="마이페이지" component={MyPageStack}
                options={{
                    tabBarIcon: ({ color, size })=> (
            <Icon name="person" size={size} color={color}/>
                    ),
                    headerShown: false,
            }}
            />

        </Tab.Navigator>
    )
}

export default MainTab
