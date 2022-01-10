import React, {useRef,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View,Keyboard,KeyboardAvoidingView, } from 'react-native'
import BorderedInput from './BorderedInput'
import CustomButton from './CustomButton'
const SignInScreen = ({ navigation, route }) => {
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const nickNameRef = useRef();
    const [ form, setForm ] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        nickName:'',
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
    return (
        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <SafeAreaView style={styles.fullscreen}>
            <Text style={styles.text}>PLALUVX</Text>
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
                            if (isSignUp)
                            {
                                confirmPasswordRef.current.focus();
                            }
                            else
                            {
                                onSubmit();
                            }
                        }}
                        secureTextEntry
                    />
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
                    />}
                <View style={styles.buttons}>
                    {
                        isSignUp ? (
                            <>
                            <CustomButton title="회원가입" hasMarginBottom onPress={onSubmit} />
                                <CustomButton title="로그인" theme="secondary" onPress={() => {
                                    navigation.goBack();
                                }} />
                            </>
                        ) : (
                                <>
                                    <CustomButton title="로그인" hasMarginBottom />
                                    <CustomButton title="회원가입" theme="secondary" onPress={() => {
                                        navigation.push('SignIn',{isSignUp : true})
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
        justifyContent: 'center',
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
        marginTop: 64,
    },
});
//헤더가 존재하지 않은 화면이므로 ios에서 상태 바 영역을 침법하지 않도록 SafeAreaView 사용
export default SignInScreen
