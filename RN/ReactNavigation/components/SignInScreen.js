import React, {useRef,useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet,  View,Keyboard,KeyboardAvoidingView,Text, Image } from 'react-native'
import BorderedInput from './BorderedInput'
import CustomButton from './CustomButton'
import sign, { actionCreators as signActions } from '../redux/modules/sign'
import { useDispatch,useSelector } from 'react-redux'
const SignInScreen = ({ navigation, route }) => {
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const dispatch = useDispatch()
    const [ form, setForm ] = useState({
        email: '',
        password: '',
    })
    const onSubmit = () => {
        Keyboard.dismiss();
        console.log(form)
    }
    const createChangeTextHandler = (name) => (value) => {
        console.log(value)
        setForm({ ...form, [name]: value });
    }
    const loginError = useSelector(state=>state.sign.loginError)
    // const { isSignUp } = route.params ?? {}; //nulish 병합연산자 활용(??)를 사용 
    //화면에 파라미터가 지정되어 있지 않다면 route.params 값이 undefined이기 때문입니다. undefined 값에 객체 구조 분해 할당
    //KeyboardAvoidingView=>키보드
    
    const login = useSelector((state) => state.sign.login)
    const check = useSelector((state) => state.sign.check)
    useEffect(() => {
        if (check) {
            if (!login)
            {
                dispatch(signActions.check(false))
                dispatch(signActions.loginError(""))
                navigation.navigate("GetGender")
                    }
                   
            else
            {   
                dispatch(signActions.check(false))
                dispatch(signActions.loginError(""))
                navigation.navigate("MainPage")
                }
                    
        }
    }, [login,check])

    //에러처리
    useEffect(() => {
     
    }, [loginError])
    const logInHandler =  () => {
        dispatch(signActions.logInAPI(form.email, form.password))  
    }
    return (
  
            <SafeAreaView style={styles.fullscreen}>
                <View style={{alignItems:"center",justifyContent:"flex-start",position:"relative",top:0}}>
                <Image source={require('../image/img_logo.png')}></Image>
            <Text style={styles.text}>로그인</Text>          
            </View>
          
            <View style={styles.form}>
                    <BorderedInput hasMarginBottom placeholder="이메일"
                        value={form.email} onChangeText={createChangeTextHandler('email')}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoCompleteType="email"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={()=> passwordRef.current.focus()}
                    />
                     <BorderedInput placeholder="비밀번호" 
                        value={form.password}
                        onChangeText={createChangeTextHandler('password')}
                        ref={passwordRef}
                        // returnKeyType={isSignUp ? 'next' : 'done'}
                        // onSubmitEditing={() => {
                        //     if (isSignUp) {
                        //         confirmPasswordRef.current.focus();
                        //     }
                        //     else {
                        //         onSubmit();
                        //     }
                        // }}
                        secureTextEntry
                    />
                    <Text style={styles.error}>{loginError}</Text>
                
                   
                <View style={styles.buttons}>
                    {
                        (
                                <>
                                    <CustomButton title="로그인" hasMarginBottom onPress={logInHandler} />
                                 
                                    <CustomButton title="이메일로 회원가입하기" theme="secondary" onPress={() => {
                                        navigation.push('GetEmail')
                                    }}/>
                                </>
                        )
                    }
               
                </View>
            </View>
            </SafeAreaView>
           
    )
}
const styles = StyleSheet.create({
    KeyboardAvoidingView: {
        flex:1,
    },
    fullscreen: {
        flex: 1,
      
        marginTop: 104,
    
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop:20,
    },
    form: {
        marginTop: 64,
        width: '100%',
        paddingHorizontal: 16,

    },
    buttons: {
        marginTop: 24,
    },
    buttons2: {
        marginTop: 257,
    },
    error: {
        color: 'red',
        marginTop:10,
    }
});
//헤더가 존재하지 않은 화면이므로 ios에서 상태 바 영역을 침법하지 않도록 SafeAreaView 사용
export default SignInScreen