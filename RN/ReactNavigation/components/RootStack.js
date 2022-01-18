import React, {useEffect,useState} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignInScreen from './SignInScreen';
import GetEmail from './SignUp/GetEmail';
import GetPassword from './SignUp/GetPassword';
import GetNickName from './SignUp/GetNickName';
import GetFinish from './SignUp/GetFinish';
import GetGender from './SignUp/GetGender';
import MainPage from './MainPage';
import GetAge from './SignUp/GetAge';
import GetIndicate from './SignUp/GetIndicate';
import GetWorry from './SignUp/GetWorry';
import UploadScreen from './UploadScreen';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as signActions } from '../redux/modules/sign';
import { TouchableOpacity,Text,View, Image } from 'react-native';
import CameraPage from './CameraPage';
import AsyncStorage from '@react-native-community/async-storage';


// const get = async () => {
//     return await AsyncStorage.getItem('token')
// }

const RootStack = ({ navigation }) => {

    const dispatch = useDispatch();
    
  
    useEffect(()=>{
       dispatch(signActions.checkLoginMD())
    }, [])
    const [login,setLogin] = useState()
    useEffect(()=>{
        async function load() {
            try {
                const raw = await AsyncStorage.getItem('token')
                setLogin(raw)    
            } catch (e) {
                console.log(e)
           }
        }
        load()
     }, [])
    // console.log(isLogin)
    const Stack = createNativeStackNavigator();
     console.log(login)
    // console.log( AsyncStorage.getItem('token') )
    return (
        <Stack.Navigator  initialRouteName='MainPage'
        >
            {
          login?  
              <>
              <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{
                   headerShown:false
              }}
              />          
              <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                  title:''
              }}
        
                        
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
              component={MainPage}
              options={{
                headerShown:false
            }}
              />       
                    </>

            }
            <Stack.Screen
                name="CameraPage"
                component={CameraPage}
                options={{headerShown: false}}
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
       
      </Stack.Navigator>  
    )
}

export default RootStack
