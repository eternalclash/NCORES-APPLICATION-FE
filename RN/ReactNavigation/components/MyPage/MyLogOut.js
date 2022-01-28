import React,{useState,useEffect} from 'react'
import { Pressable, StyleSheet, Text,View,Modal } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
import LogoutModal from '../Modal/LogoutModal'
const MyLogOut = ({ navigation }) => {
    const [login, setLogin] = useState()
    const [logout,setLogout] = useState()
    const dispatch = useDispatch();
    const load = async() => {
        try {
            await AsyncStorage.removeItem('token')
            setLogout(false)
            dispatch(signActions.checkLoginMD(true))
  
        } catch (e) {
            console.log(e)
       }
    }
   
  
    return (
        <View style={[!logout&&styles.main,logout&&styles.main3]}>
            <View style={styles.main1}>
             
                <Text style={styles.fontSize}>앱 정보</Text>
                <Text style={styles.fontSize}>v 0.0.1</Text>
                
               
            </View>
            <Pressable  onPress={()=>setLogout(true)}>
            <View style={{ height: 56, justifyContent:'center',alignItems:'center', marginHorizontal:20,backgroundColor:'#323632',marginTop:20}}>
                <Text style={{color:"white",fontSize:15}}>로그아웃</Text>
               
            </View>
            </Pressable>

            <View style={styles.bottom}>
            <Pressable onPress={()=>navigation.navigate("GetOut")}><Text style={styles.MainText}>회원 탈퇴</Text></Pressable>
          
            <Text style={styles.subText}>-2021. Plaluvs all rights reserved.</Text>    
            </View>
            {
                logout ?     <View style={{backgroundColor: '#ecf0f1',}}><Modal 

                transparent= {true}
                visible={true}
                
                style={{marginHorizontal:20}}
            >
                <Pressable style={{marginHorizontal:20,backgroundColor:"rgba(0,0,0,0.6)"}} >
                    <View style={{width:"100%",height:150,borderRadius:8,backgroundColor:"white",position:"absolute",top:300,borderWidth:0.7}}>
                    <Text style={{fontSize:20,marginLeft:20,marginTop:20}}>로그아웃 할까요?</Text> 
                    <View style={{flexDirection:"row",justifyContent:"flex-end",marginTop:70,marginRight:20}}>
                                <Pressable onPress={()=>setLogout(false)}>
                                <Text style={{ marginRight: 30 }}>아니요</Text>
                               </Pressable>
                                
                                <Pressable onPress={load}>
                                <Text>로그아웃</Text>
                                </Pressable>

                    </View>
                    </View>

            </Pressable>

            </Modal></View> : <></>
            }
     
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        position: "relative",
        backgroundColor:"white"
    },
    subText: {
        marginVertical: 2,
        marginHorizontal: 15,
        fontColor:"lightGrey",
    },
    MainText: {
        marginVertical: 2,
        marginHorizontal: 15,
        fontSize: 18,
   
    },
    bottom: {
        position: "absolute",
        bottom:15,
    },
    main1: {
        marginVertical: 10,
        marginHorizontal: 20,
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor:"lightgrey",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    main3: {
  
        backgroundColor:"rgba(0,0,0,0.6)",
        flex: 1,
        position:"relative",
        
    },
    fontSize: {
        fontSize:25,
    }
})
export default MyLogOut
