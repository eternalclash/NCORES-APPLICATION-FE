import React from 'react'
// import createBottomTabNavigator from '@react-navigation/bottom-tabs'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen';
import MyProfileScreen from './MyProfileScreen';
import SkinTestScreen from './SkinTestScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import MainPage from '../MainPage';
import MyPageStack from '../MyPage/MyPageStack';
import MainSkin from '../Skin/MainSkin';
import MainSkinPage from '../Skin/MainSkinPage';
const Tab = createBottomTabNavigator();
const MainTab = () => {
 
    return (
        <Tab.Navigator
            screenOptions={{
              
                headerShown: false,
               
        }}
        >
            <Tab.Screen name="홈" component={MainPage} options={{
               
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" size={size} color={color} />
                ),
                
                headerShown: false,
            
        	}}  />
            <Tab.Screen name="피부기록" component={MainSkinPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="event" size={size} color={color}/>
               )
           }}
            />
           <Tab.Screen name="내계정" component={MyPageStack}
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
