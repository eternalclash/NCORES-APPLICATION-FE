import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const GetAge = ({ navigation, route }) => {
    const check = useSelector((state) => state.sign.check); 
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
        {  dispatch(signActions.check(false))
           navigation.navigate('GetIndicate')
            }
    }, [check])
    const [age, setAge] = useState('');

    const ageHandler0 = (value) => {
        setAge(age+value)
        if(value.length>0)
        number1.current.focus()
    }
    const ageHandler1 = (value) => {
        setAge(age+value )
        if(value.length>0)
        number2.current.focus()
    }
    const ageHandler2 = (value) => {
        setAge(age+value)
        if(value.length>0)
        number3.current.focus()
    }
    const ageHandler3 = (value) => {
        setAge(age + value)
        console.log(age)
        if (value.length > 0)
            Keyboard.dismiss();
    }
    const ageHandler = () => {
        dispatch(signActions.setAgeAPI(age))
    }

    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>태어난 해</Text>
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
                    <View style={styles.buttons}/>
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
    }
})
export default GetAge