import React, {useState,useEffect, isValidElement} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as checkActions } from '../../redux/modules/check'
import CameraLoading from '../CameraLottie'
const CameraConcern = ({ navigation, route }) => {
    const [loading,setLoading] = useState(false)
    const [num1, setNum1] = useState(false)
    const [num2, setNum2] = useState(false)
    const [num3, setNum3] = useState(false)
    const [num4, setNum4] = useState(false)
    const [num5, setNum5] = useState(false)
    const [num6, setNum6] = useState(false)
    const dispatch = useDispatch();
    const cameraCheck = useSelector(state => state.check.cameraCheck)
    useEffect(() => {
        if (cameraCheck)
        {   setLoading(false)
            dispatch(checkActions.cameraCheck(false))
            navigation.navigate("CameraIndicate")
            }
    }, [cameraCheck])
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
         if (num6)
             arr.push(6)
        setLoading(true)
        dispatch(checkActions.check2API(arr))
        // dispatch(signActions.setWorryAPI())

        // if (check)
        //     navigation.navigate("GetAge")
    }

   if(!loading)
    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>피부에 자극이 되는 일이 있었나요?</Text>
                <Text style={styles.textMedium}>해당하는 항목을 모두 골라주세요</Text>
                <View style={styles.form}>
                { num1==true
                         ?<CustomButton color="red"
                         title="수면 부족" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum1(!num1)
                            }} />:
                            <CustomButton
                            title="수면 부족" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum1(!num1)
                        }} />
                    }
                 { num2==true
                         ?<CustomButton color="red"
                         title="스트레스" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum2(!num2)
                            }} />:
                            <CustomButton
                            title="스트레스" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum2(!num2)
                        }} />
                    }
                 { num3==true
                         ?<CustomButton color="red"
                         title="생리 주기" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum3(!num3)
                            }} />:
                            <CustomButton
                            title="생리 주기" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum3(!num3)
                        }} />
                    }
                 { num4==true
                         ?<CustomButton color="red"
                         title="강추위 또는 뜨거운 햇빛 노출" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum4(!num4)
                            }} />:
                            <CustomButton
                            title="강추위 또는 뜨거운 햇빛 노출" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum4(!num4)
                        }} />
                    }
                        { num5==true
                         ?<CustomButton color="red"
                         title="음주" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum4(!num4)
                            }} />:
                            <CustomButton
                            title="음주" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum4(!num4)
                        }} />
                    }
                 { num6==true
                         ?<CustomButton color="red"
                         title="없음" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum6(!num6)
                            }} />:
                            <CustomButton
                            title="없음" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum6(!num6)
                        }} />
                    }
               
                   
                 
                </View>
                <View style={styles.buttons}>
                    <CustomButton title="다음" onPress={
                        worryHandler
                    } style={styles.buttons} />
                        </View>
            </View>   
        </>
    )

    if (loading)
        return (
            <CameraLoading/>
        )
}
const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 52,
        backgroundColor:"white"
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        textAlign:'center'
    },
    textMedium: {
        marginTop:20,
        fontSize: 18,
        textAlign:'center'
    },
    form: {
        marginTop: 44,
        width: '100%',
        paddingHorizontal: 16,
    },
    buttons: {
        position: 'absolute',
        bottom: 0,
        width: '100%',

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
export default CameraConcern