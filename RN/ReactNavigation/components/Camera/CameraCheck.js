import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as checkActions } from '../../redux/modules/check'

const CameraCheck = ({ navigation, route }) => {
 

    const cameraCheck = useSelector(state => state.check.cameraCheck)
    console.log(cameraCheck)
    const [num1, setNum1] = useState(false)
    const [num2, setNum2] = useState(false)
    const [num3, setNum3] = useState(false)
    const [num4, setNum4] = useState(false)
    const [num5, setNum5] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        if (cameraCheck)
        {   
            dispatch(checkActions.cameraCheck(false))
            navigation.navigate("CameraConcern")
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
        // dispatch(signActions.setWorryAPI())
        // navigation.navigate("CameraConcern")
        // if (check)
        //     navigation.navigate("GetAge")
        dispatch(checkActions.check1API(arr))
    }

   
    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>오늘 피부 상태는 어떤가요?</Text>
                <Text style={styles.textMedium}>해당하는 항목을 모두 골라주세요</Text>
                <View style={styles.form}>
                { num1==true
                         ?<CustomButton color="red"
                         title="따가움" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum1(!num1)
                            }} />:
                            <CustomButton
                            title="따가움" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum1(!num1)
                        }} />
                    }
                 { num2==true
                         ?<CustomButton color="red"
                         title="건조함" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum2(!num2)
                            }} />:
                            <CustomButton
                            title="건조함" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum2(!num2)
                        }} />
                    }
                 { num3==true
                         ?<CustomButton color="red"
                         title="트러블" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum3(!num3)
                            }} />:
                            <CustomButton
                            title="트러블" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum3(!num3)
                        }} />
                    }
                 { num4==true
                         ?<CustomButton color="red"
                         title="유분기" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum4(!num4)
                            }} />:
                            <CustomButton
                            title="유분기" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum4(!num4)
                        }} />
                    }
                 { num5==true
                         ?<CustomButton color="red"
                         title="없음" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum5(!num5)
                            }} />:
                            <CustomButton
                            title="없음" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum5(!num5)
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
export default CameraCheck