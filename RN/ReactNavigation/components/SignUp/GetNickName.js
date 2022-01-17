
import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const GetNickName = ({navigation, route}) => {
    const [nickName, setNickName] = useState("")
    const check = useSelector((state) => state.sign.check)
    const email = useSelector((state) => state.sign.email)
    const password = useSelector((state) => state.sign.password)
    const confirmPassword = useSelector((state) => state.sign.confirmPassword)
    const nickNameError = useSelector((state) => state.sign.nickNameError)
    
    const dispatch = useDispatch();
    useEffect(() => {
        if (check)
        {
               
            dispatch(signActions.check(false))
            dispatch(signActions.nickNameError(""))
            navigation.navigate("GetFinish")
            }
    }, [check])
    useEffect(() => {
       
    }, [nickNameError])
    const nickNameHandler = () => {
        dispatch(signActions.signUpAPI(email,password,confirmPassword,nickName))
    }
   
    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>회원가입</Text>
                <View style= {styles.form}>
                <BorderedInput placeholder="닉네임"
                    value={nickName}
                    onChangeText={(value) => setNickName(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="done"
                    
                    />
              
                    <Text style={styles.error}>{nickNameError}</Text>
                    <View style={styles.buttons}/>
                    <CustomButton title="다음" onPress={
                        nickNameHandler
                    } style={styles.buttons}/>
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
        marginTop: 82,
    },
    error: {
        color: "red",
        marginTop:10,
    }
})
export default GetNickName
