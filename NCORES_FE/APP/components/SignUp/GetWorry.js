import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const GetWorry = ({ navigation, route }) => {
    const check = useSelector((state) => state.sign.check); 
    const worry = useSelector((state) => state.sign.worryLogin)
    const [num1, setNum1] = useState(false)
    const [num2, setNum2] = useState(false)
    const [num3, setNum3] = useState(false)
    const [num4, setNum4] = useState(false)
    const [num5, setNum5] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        if (check)
        {   
            dispatch(signActions.check(false))
            navigation.navigate("GetHead")
            }
    }, [check])
    const worryHandler = () => {
        const arr = [];
        if (num1)
            arr.push(1)
        if (num2)
            arr.push(2)
        if (num3)
            arr.push(3)
        if (num4)
            arr.push(4)
        if (num5)
            arr.push(5)
        dispatch(signActions.setWorryAPI(arr))
        // navigation.navigate("GetAge")
        // if (check)
        //     navigation.navigate("GetAge")
    }

   
    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>현재 피부 고민은 무엇인가요?</Text>
                <Text style={styles.text1}>해당하는 건 모두 골라주세요</Text>
               
                <View style={styles.form}>
                { num1==true
                         ?<CustomButton color="red"
                         title="모공 또는 트러블성 피부" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum1(!num1)
                            }} />:
                            <CustomButton
                            title="모공 또는 트러블성 피부" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum1(!num1)
                        }} />
                    }
                 { num2==true
                         ?<CustomButton color="red"
                         title="탄력 또는 주름이 고민인 피부" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum2(!num2)
                            }} />:
                            <CustomButton
                            title="탄력 또는 주름이 고민인 피부" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum2(!num2)
                        }} />
                    }
                 { num3==true
                         ?<CustomButton color="red"
                         title="민감한 피부" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum3(!num3)
                            }} />:
                            <CustomButton
                            title="민감한 피부" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum3(!num3)
                        }} />
                    }
                 { num4==true
                         ?<CustomButton color="red"
                         title="색소침착 또는 칙칙한 피부" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum4(!num4)
                            }} />:
                            <CustomButton
                            title="색소침착 또는 칙칙한 피부" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum4(!num4)
                        }} />
                    }
                 { num5==true
                         ?<CustomButton color="red"
                         title="유수분의 불균형인 피부" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum5(!num5)
                            }} />:
                            <CustomButton
                            title="유수분의 불균형인 피부" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum5(!num5)
                        }} />
                    }
               
                   
                    <View style={styles.buttons}/>
                    <CustomButton title="다음" onPress={
                        worryHandler
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
        fontSize: 18,
        fontWeight: 'bold'
    },
    text1: {
        fontSize: 15,
        marginTop: 14,
    },
    textMedium: {
        marginTop:20,
        fontSize:20,
    },
    form: {
        marginTop: 44,
        width: '100%',
        paddingHorizontal: 16,
    },
    buttons: {
        marginTop: 82,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
export default GetWorry