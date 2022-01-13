import React, {useRef,useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet,  View,Keyboard,KeyboardAvoidingView,Text } from 'react-native'
import BorderedInput from './BorderedInput'
import CustomButton from './CustomButton'
import { actionCreators as signActions } from '../redux/modules/sign'
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
    const { isSignUp } = route.params ?? {}; //nulish 병합연산자 활용(??)를 사용 
    //화면에 파라미터가 지정되어 있지 않다면 route.params 값이 undefined이기 때문입니다. undefined 값에 객체 구조 분해 할당
    //KeyboardAvoidingView=>키보드
    
    const login = useSelector((state) => state.sign.login)
    const check = useSelector((state) => state.sign.check)
    useEffect(() => {
        if (check)
        { 
            if (login)
            {     dispatch(signActions.check(false))
                navigation.navigate("MainPage")
            }
            else
            {    dispatch(signActions.check(false))
                navigation.navigate("GetGender")
             }    
            }
    }, [check])
    const logInHandler = async () => {
        dispatch(signActions.logInAPI(form.email, form.password))  
    }
    return (
        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <SafeAreaView style={styles.fullscreen}>
            <Text style={styles.text}>로그인</Text>
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
                     <BorderedInput placeholder="비밀번호" hasMarginBottom={isSignUp}
                        value={form.password}
                        onChangeText={createChangeTextHandler('password')}
                        ref={passwordRef}
                        returnKeyType={isSignUp ? 'next' : 'done'}
                        onSubmitEditing={() => {
                            if (isSignUp) {
                                confirmPasswordRef.current.focus();
                            }
                            else {
                                onSubmit();
                            }
                        }}
                        secureTextEntry
                    />
                    
                    {/*
                    {isSignUp && <BorderedInput placeholder="비밀번호 확인" hasMarginBottom={isSignUp}
                    value={form.confirmPassword}
                        onChangeText={createChangeTextHandler('confirmPassword')}
                        ref={confirmPasswordRef}
                        returnKeyType={isSignUp ? 'next' : 'done'}
                        onSubmitEditing={onSubmit}
                        secureTextEntry
                    />}
                    {isSignUp && <BorderedInput placeholder="닉네임" hasMarginBottom={isSignUp}
                        value={form.nickName}
                        onChangeText={createChangeTextHandler('nickName')}
                        ref={nickNameRef}
                        returnKeyType="done"
                        onSubmitEditing={onSubmit}
                    />} */}
                    {/* {
                        isSignUp && <BorderedInput placeholder="출생연도" hasMarginBottom={isSignUp}
                        value={form.nickName}
                        onChangeText={createChangeTextHandler('nickName')}
                        ref={nickNameRef}
                        returnKeyType="done"
                        onSubmitEditing={onSubmit}
                    />
                    }
                    {
                        isSignUp && <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        formHorizontal={true}
                        buttonSize={10}
                        borderWidth={0.4}
                      />
                    } */}
                   
                <View style={styles.buttons}>
                    {
                        (
                                <>
                                    <CustomButton title="로그인" hasMarginBottom onPress={logInHandler} />
                                    <View style={styles.buttons2}>

                                    </View>
                                    <CustomButton title="이메일로 회원가입하기" theme="secondary" onPress={() => {
                                        navigation.push('GetEmail')
                                    }}/>
                                </>
                        )
                    }
               
                </View>
            </View>
            </SafeAreaView>
            </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    KeyboardAvoidingView: {
        flex:1,
    },
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
        marginTop: 64,
        width: '100%',
        paddingHorizontal: 16,

    },
    buttons: {
        marginTop: 24,
    },
    buttons2: {
        marginTop: 257,
    }
});
//헤더가 존재하지 않은 화면이므로 ios에서 상태 바 영역을 침법하지 않도록 SafeAreaView 사용
export default SignInScreen