import React, {useState,useRef,useEffect} from 'react'
import { Text, View, StyleSheet,Pressable,Image } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon  from 'react-native-vector-icons/EvilIcons'
const GetPassword = ({ navigation, route }) => {
    const [password,setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const confirmPasswordRef = useRef();
    const dispatch = useDispatch()
    const check = useSelector((state) => state.sign.check)
    const passwordError = useSelector(state => state.sign.passwordError)
    const { top } = useSafeAreaInsets();

    const passwordHandler = () => {
        dispatch(signActions.checkPasswordAPI(password,confirmPassword))
    }
    useEffect(() => {
        if (check)
        {
            console.log(check)
            dispatch(signActions.passwordError(""))
            dispatch(signActions.check(false))
            navigation.navigate("GetNickName")
            }
    }, [check])
    useEffect(() => {
    
    }, [passwordError])
    return (
        <>
              <View style={{
                height:top
            }}></View>
         
            <View>
                <Pressable onPress={()=>navigation.navigate("GetEmail")}>
                    <Icon name="chevron-left" size={60}></Icon>
                </Pressable>
             </View>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>회원가입</Text>
                <View style= {styles.form}>
                <BorderedInput placeholder="비밀번호"
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    returnKeyType="next"
                        secureTextEntry
                        onSubmitEditing={()=>confirmPasswordRef.current.focus()}
                    />
                <View style={styles.buttons2}/>
                 <BorderedInput placeholder="비밀번호확인"
                    value={confirmPassword}
                    onChangeText={(value) => setConfirmPassword(value)}
                    returnKeyType="done"
                        secureTextEntry
                        ref={confirmPasswordRef}
                    />
                     <Text style={styles.error}>{passwordError}</Text>
                    <View style={styles.buttons}/>
                    <CustomButton title="다음" onPress={
                        passwordHandler
                    } style={styles.buttons}/>
                </View>
                <View style={{ position: "absolute", bottom: 75,width: 160, height: 14 }} >
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
        flex: 1,
        alignItems: 'center',
        marginTop: 104,
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
        marginTop: 24,
    },
    buttons2: {
        marginTop:12
    },
    error: {
        color: 'red',
        marginTop:10,
    }
})
export default GetPassword
