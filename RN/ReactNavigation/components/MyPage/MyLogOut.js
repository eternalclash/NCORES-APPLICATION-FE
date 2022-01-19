import React,{useState,useEffect} from 'react'
import { Pressable, StyleSheet, Text,View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const MyLogOut = ({ navigation }) => {
    const [login,setLogin] = useState()
    const dispatch = useDispatch();
        const load = async() => {
            try {
                 await AsyncStorage.removeItem('token')
                dispatch(signActions.checkLoginMD(true))
                navigation.navigate("SignIn")
            } catch (e) {
                console.log(e)
           }
        }
   
  
    return (
        <View style={styles.main}>
            <View style={styles.main1}>
                <Pressable onPress={load}>
                <Text style={styles.fontSize}>로그아웃</Text>
                </Pressable>
                
               
            </View>
            <View style={styles.main1}>
                <Text style={styles.fontSize}>탈퇴</Text>
               
            </View>
            <View style={styles.bottom}>
            <Text style={styles.MainText}>개인정보처리방침</Text>
            <Text style={styles.subText}>v 0.0.1</Text>
            <Text style={styles.subText}>-2021. Plaluvs all rights reserved.</Text>    
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        position:"relative",
    },
    subText: {
        marginVertical: 2,
        marginHorizontal: 15,
        fontColor:"lightGrey",
    },
    MainText: {
        marginVertical: 2,
        marginHorizontal: 15,
        fontSize: 20,
        fontWeight:"500",
    },
    bottom: {
        position: "absolute",
        bottom:15,
    },
    main1: {
        marginVertical: 10,
        marginHorizontal: 15,
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor:"lightgrey",
        height:40,
    },
    fontSize: {
        fontSize:25,
    }
})
export default MyLogOut
