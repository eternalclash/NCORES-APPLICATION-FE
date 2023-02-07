
import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon  from 'react-native-vector-icons/EvilIcons'
const GetEmail = ({ navigation, route }) => {
    const check = useSelector((state) => state.sign.check); 
    const emailError = useSelector(state=>state.sign.emailError)
    const [email, setEmail] = useState("")
    
   //safeInset
    const { top } = useSafeAreaInsets();


    const emailHandler = async () => {
        dispatch(signActions.checkEmailAPI(email))
    }
    const dispatch = useDispatch();
    useEffect(() => {
        if (check)
        {
            console.log(check)
            dispatch(signActions.check(false)) 
            dispatch(signActions.emailError(""))
            navigation.navigate("GetPassword")
            }
    }, [check])
    useEffect(() => {
        
    }, [emailError])
  
    return (
        <>
            <View style={{
                height:top,backgroundColor:"white"
            }}></View>
         
            <View style={{backgroundColor:"white"}}>
                <Pressable onPress={()=>navigation.navigate("SignIn")}>
                    <Icon name="chevron-left" size={60}></Icon>
                </Pressable>
             </View>
            <View style={styles.fullscreen}>
            <View>
       
            </View>
                <Text style={styles.text}>회원가입</Text>
                <View style= {styles.form}>
                <BorderedInput placeholder="이메일"
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="done"
                    
                    />
                    <Text style={styles.error}>{emailError}</Text>
                    <View style={styles.buttons}/>
                    <CustomButton title="다음" onPress={
                        emailHandler
                    } style={styles.buttons}/>
                </View>
               
                <View style={{ position: "absolute", bottom: -400,width: 160, height: 14 }} >
                    <View  >
                        <Image source={require('../../image/PLALUVS.png')} style={{width: 160, height: 25}}resizeMode='center'></Image>
                </View>
              
                </View>  
            </View>   
            
        </>
    )
}
const styles = StyleSheet.create({
    fullscreen: {
        backgroundColor:"white",
        alignItems: 'center',
    
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    form: {
        marginTop: 44,
        width: '100%',
        paddingHorizontal: 16,
    },
    buttons: {
        marginTop: 82,
    },
    error: {
        color: 'red',
        marginTop:10,
    }
})
export default GetEmail

