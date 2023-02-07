import React from 'react';
import { Text, View,Image, Pressable,RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { actionCreators as signActions } from '../../redux/modules/sign';
import { useDispatch } from 'react-redux';
const Thank = ({navigation}) => {
    const dispatch = useDispatch()
    const load = async() => {
        try {
    
            await AsyncStorage.removeItem('token')
       
            dispatch(signActions.checkLoginMD(true))
            navigation.reset({ routes: [{ name: 'SignUp' }] })
        } catch (e) {
            console.log(e)
       }
    }
    return <>
        <Pressable style={{flex:1,justifyContent:"center",alignItems:"center"}} onPress={load}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:22,fontWeight:"500",marginBottom:10}}>탈퇴되었습니다</Text>
            <Text>이용해 주셔서 감사합니다.</Text>
            <View style={{position:"absolute",bottom:60,}}  >
                        <Image source={require('../../image/PLALUVS.png')} style={{width: 160, height: 25}}resizeMode='center'></Image>
                    </View>
          </View>
        </Pressable>
      
    </>;
};

export default Thank;
