import React, {useEffect,useState} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignInScreen from './SignInScreen';
import GetEmail from './SignUp/GetEmail';
import GetPassword from './SignUp/GetPassword';
import GetNickName from './SignUp/GetNickName';
import GetFinish from './SignUp/GetFinish';
import GetGender from './SignUp/GetGender';

import GetAge from './SignUp/GetAge';
import GetIndicate from './SignUp/GetIndicate';
import GetWorry from './SignUp/GetWorry';
import UploadScreen from './UploadScreen';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as signActions } from '../redux/modules/sign';
import { TouchableOpacity,Text,View, Image } from 'react-native';
import CameraPage from './CameraPage';
import AsyncStorage from '@react-native-community/async-storage';
import MainTab from './Tab/MainTab';
import MyLogOut from './MyPage/MyLogOut';
import CameraInfo from './Camera/CameraInfo';
import CameraConcern from './Camera/CameraConcern';
import CameraIndicate from './Camera/CameraIndicate';
import CameraCheck from './Camera/CameraCheck';
import CameraRating from './Camera/CameraRating';
import MainReport from './Report/MainReport';
import HairCheck from './Skin/HairCheck';
import SkinReport from './Skin/SkinReport';
import ShopList from './Report/ShopList';
import { Button } from 'react-native-paper';
import BlueTooth from './BlueTooth';


// const get = async () => {
//     return await AsyncStorage.getItem('token')
// }

const RootStack = ({ navigation }) => {

    const dispatch = useDispatch();
    const isLogin = useSelector(state=>state.sign.checkLogin)
  
    useEffect(()=>{
       dispatch(signActions.checkLoginMD())
    }, [])
   
    useEffect(()=>{
        async function load() {
            try {
                const raw = await AsyncStorage.getItem('token')
                console.log(raw)
                setLogin(raw)    
            } catch (e) {
                console.log(e)
           }
        }
        load()
    }, [isLogin])
    const [login,setLogin] = useState()
    // console.log(isLogin)
    const Stack = createNativeStackNavigator();
    console.log(login)
     console.log(isLogin)
    // console.log( AsyncStorage.getItem('token') )
    return (
        <Stack.Navigator 
        initialRouteName='BlueTooth'
        >
            {
          login?  
              <>
              <Stack.Screen
              name="MainPage"
              component={MainTab}
              options={{headerShown: false}}
              />          
                         
                     
                        </>
                    :
                    <>
                     <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
              title:''
          }}
                        />
                           <Stack.Screen
              name="MainPage"
              component={MainTab}
              options={{headerShown: false}}
              />       
                    </>

            }
              <Stack.Screen
                name="MainReport"
                component={MainReport}
                options={{
                    headerShown: false
                }}
            />
              <Stack.Screen
                name="BlueTooth"
                component={BlueTooth}
                options={{
                    headerShown: false
                }}
            />
               <Stack.Screen
                name="ShopList"
                component={ShopList}
                options={{
                    title:"추천제품"
                }}
            />
              <Stack.Screen
                name="CameraInfo"
                component={CameraInfo}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="CameraCheck"
                component={CameraCheck}
                options={{
                    headerShown: false
                }}
            />
              <Stack.Screen
                name="CameraConcern"
                component={CameraConcern}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen
                name="CameraIndicate"
                component={CameraIndicate}
                options={{
                    headerShown: false
                }}
            />
              <Stack.Screen
                name="CameraPage"
                component={CameraPage}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen
                name="CameraRating"
                component={CameraRating}
                options={{
                    headerShown: false
                }}
            />
            
            <Stack.Screen
                name="GetEmail"
                component={GetEmail}
                options={{
                    title:''
                }}
            />
            <Stack.Screen
                name="GetPassword"
                component={GetPassword}
                options={{
                    title:''
                }}
            />
            <Stack.Screen
                name="GetNickName"
                component={GetNickName}
                options={{
                    title:''
                }}
            />
             <Stack.Screen
                name="GetFinish"
                component={GetFinish}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name="GetGender"
                component={GetGender}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GetAge"
                component={GetAge}
                options={{headerShown: false}}
            />
              <Stack.Screen
                name="GetIndicate"
                component={GetIndicate}
                options={{headerShown: false}}
            />
              <Stack.Screen
                name="GetWorry"
                component={GetWorry}
                options={{headerShown: false}}
            />
                <Stack.Screen
                name="Upload"
                component={UploadScreen}
                options={{headerShown: false}}
            />
          <Stack.Screen
                name="HairCheck"
                component={HairCheck}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SkinReport"
                component={SkinReport}
                options={{ title:"나의 피부 기록" }}
            />
       
      </Stack.Navigator>  
    )
}

export default RootStack
