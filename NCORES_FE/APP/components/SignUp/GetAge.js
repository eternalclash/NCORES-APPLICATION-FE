import React, {useState,useEffect,useRef} from 'react'
import { Text, View, StyleSheet,TextInput,Keyboard } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const GetAge = ({ navigation, route }) => {
    const check = useSelector((state) => state.sign.check); 
    const ageError = useSelector(state=>state.sign.ageError)

    const dispatch = useDispatch();
    const number0 = useRef();
    const number1 = useRef();
    const number2 = useRef();
    const number3 = useRef();

    const onSubmit = () => {
        Keyboard.dismiss();
        console.log(form)
    }
    useEffect(() => {
        if (check)
        {
            dispatch(signActions.check(false))
            dispatch(signActions.ageError(""))
           navigation.navigate('GetIndicate')
            }
    }, [check])
    useEffect(() => {
        
    }, [ageError])
    const [age, setAge] = useState('');
    const [age1, setAge1] = useState('');
    const [age2, setAge2] = useState('');
    const [age3, setAge3] = useState('');
    const [all,setAll] = useState('')
     const ageHandler0 = (value) => {
        setAge(value)
        if(value.length>0)
        number1.current.focus()
    }
    const ageHandler1 = (value) => {
        setAge1(value )
        if(value.length>0)
        number2.current.focus()
    }
    const ageHandler2 = (value) => {
        setAge2(value)
        if(value.length>0)
        number3.current.focus()
    }
    const ageHandler3 = (value) => {
        setAge3(value)
        console.log(age)
        if (value.length > 0)
            Keyboard.dismiss();
    }
    const ageHandler = () => {

        setAll(age + age1 + age2 + age3)
        console.log(all)
        dispatch(signActions.setAgeAPI(age+age1+age2+age3))
     
    }

    return (
        <>
            <View style={styles.fullscreen}>
            <View style={{
                height:100,backgroundColor:"white"
            }}></View>
                <Text style={styles.text}>언제 태어나셨나요?</Text>
                <Text style={styles.text1}>태어난 년도를 입력해주세요</Text>
                <View style= {styles.form}>
                {/* <BorderedInput placeholder="이메일"
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="done"
                    
                    />  */}
                <View style={styles.row}>
                        <TextInput style={styles.input} ref={number0}
                         onChangeText={ageHandler0}
                            keyboardType='numeric' maxLength={1} />
                         <TextInput style={styles.input} ref={number1}
                         onChangeText={ageHandler1}
                            keyboardType='numeric' maxLength={1} />
                         <TextInput style={styles.input} ref={number2}
                         onChangeText={ageHandler2}
                            keyboardType='numeric' maxLength={1} />
                         <TextInput style={styles.input} ref={number3}
                         onSubmitEditing={()=> onSubmit()}  onChangeText={ageHandler3}
                            keyboardType='numeric' maxLength={1} />
               
                    </View>
                    <Text style={styles.error}>{ageError}</Text>
                    <View style={styles.buttons} />
                    
                    <CustomButton title="다음" onPress={
                        ageHandler
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
       backgroundColor:"white",
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text1: {
        fontSize: 15,
        marginTop:14,
    },
    form: {
        marginTop: 44,
        width: '100%',
        paddingHorizontal: 16,
    },
    buttons: {
        marginTop: 82,
    },
    input: {
        borderBottomWidth:1,
        height: 60,
        width: 34,
        marginHorizontal:10,
        fontSize: 60,
        textAlign:'center'
    },
    row: {
        flexDirection: "row",
        justifyContent:"center",
    },
    error: {
        color: "red",
        marginTop:30,
    }
})
export default GetAge