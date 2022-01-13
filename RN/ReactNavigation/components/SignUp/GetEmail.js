
import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const GetEmail = ({ navigation, route }) => {
    const check = useSelector((state) => state.sign.check); 
    
    const [email, setEmail] = useState("")
    
    const emailHandler = async () => {
        dispatch(signActions.checkEmailAPI(email))
    }
    const dispatch = useDispatch();
    useEffect(() => {
        if (check)
        {
            console.log(check)
            dispatch(signActions.check(false))
            navigation.navigate("GetPassword")
            }
    }, [check])
  
    return (
        <>
            
            <View style={styles.fullscreen}>
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
                    <View style={styles.buttons}/>
                    <CustomButton title="다음" onPress={
                        emailHandler
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
    }
})
export default GetEmail

