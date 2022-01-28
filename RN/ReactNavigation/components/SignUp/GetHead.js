import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const GetHead = ({ navigation, route }) => {
    const check = useSelector((state) => state.sign.check); 
    const worry = useSelector((state) => state.sign.worryLogin)
    const [num1, setNum1] = useState(false)
    const [num2, setNum2] = useState(false)
    const [num3, setNum3] = useState(false)
    const [num4, setNum4] = useState(false)
    const [num5, setNum5] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(signActions.checkLoginMD(false))
       }, [check])
       const worryHandler = () => {
      navigation.navigate("MainPage")
           // navigation.navigate("GetAge")
           // if (check)
           //     navigation.navigate("GetAge")
       }

   
    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>플라럽스로 두피도 관리해요</Text>
                <Text style={styles.text1}>해당하는 두피 상태를 모두 골라주세요</Text>
               
                <View style={styles.form}>
                { num1==true
                         ?<CustomButton color="red"
                         title="두피에 열감을 느낀다" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum1(!num1)
                            }} />:
                            <CustomButton
                            title="두피에 열감을 느낀다" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum1(!num1)
                        }} />
                    }
                 { num2==true
                         ?<CustomButton color="red"
                         title="두피가 답답한 느낌을 받는다" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum2(!num2)
                            }} />:
                            <CustomButton
                            title="두피가 답답한 느낌을 받는다" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum2(!num2)
                        }} />
                    }
                 { num3==true
                         ?<CustomButton color="red"
                         title="샴푸 세정후 두피가 당김현상을 느낀다" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum3(!num3)
                            }} />:
                            <CustomButton
                            title="샴푸 세정후 두피가 당김현상을 느낀다" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum3(!num3)
                        }} />
                    }
                 { num4==true
                         ?<CustomButton color="red"
                         title="하루에 탈모되는 모발의 수가  50개 이상이다" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum4(!num4)
                            }} />:
                            <CustomButton
                            title="하루에 탈모되는 모발의 수가  50개 이상이다" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum4(!num4)
                        }} />
                    }
                 { num5==true
                         ?<CustomButton color="red"
                         title="위 내용 중에 해당사항이 없다" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum5(!num5)
                            }} />:
                            <CustomButton
                            title="위 내용 중에 해당사항이 없다" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum5(!num5)
                        }} />
                    }
               
                   
                    <View style={styles.buttons}/>
                    <CustomButton title="완료" onPress={
                      ()=> navigation.navigate("MainPage")
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
export default GetHead