import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const GetIndicate = ({ navigation, route }) => {
    const check = useSelector((state) => state.sign.check); 
    const indicateError = useSelector(state => state.sign.indicateError)
    const [indicate, setIndicate] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        if (check)
        {   
            dispatch(signActions.check(false))
            dispatch(signActions.indicateError(""))
            navigation.navigate("GetWorry")
            }
    }, [check])
    useEffect(() => {
  
    }, [indicateError])
    const indicateHandler = () => {
        dispatch(signActions.setIndicateAPI(indicate))
        // navigation.navigate("GetAge")
        // if (check)
        //     navigation.navigate("GetAge")
    }

   
    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>현재 피부상태</Text>
                <Text style={styles.textMedium}>택1</Text>
                <View style={styles.form}> 
                    { indicate==1
                         ?<CustomButton color="red"
                         title="세안 후 피부가 심하게 건조한 건성" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setIndicate(1)
                            }} />:
                            <CustomButton
                            title="세안 후 피부가 심하게 건조한 건성" theme="secondary" hasMarginBottom
                            onPress={() => {
                                            setIndicate(1)
                        }} />
                    }
                    { indicate==2
                         ?<CustomButton color="red"
                         title="세안 후 반들거리지만 속이 건조한 수분 부족한 지성" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setIndicate(2)
                            }} />:
                            <CustomButton
                            title="세안 후 반들거리지만 속이 건조한 수분 부족한 지성" theme="secondary" hasMarginBottom
                            onPress={() => {
                                            setIndicate(2)
                        }} />
                    }
                    { indicate==3
                         ?<CustomButton color="red"
                         title="세안 후 시간이 조금만 지나도 유분이 생기는 지성" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setIndicate(3)
                            }} />:
                            <CustomButton
                            title="세안 후 시간이 조금만 지나도 유분이 생기는 지성" theme="secondary" hasMarginBottom
                            onPress={() => {
                                            setIndicate(3)
                        }} />
                    }
                    { indicate==4
                         ?<CustomButton color="red"
                         title="세안 후 U존(볼과 턱)만 얼굴이 건조한 복합성" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setIndicate(4)
                            }} />:
                            <CustomButton
                            title="세안 후 U존(볼과 턱)만 얼굴이 건조한 복합성" theme="secondary" hasMarginBottom
                            onPress={() => {
                                            setIndicate(4)
                        }} />
                    }
                    { indicate==5
                         ?<CustomButton color="red"
                         title="위 내용 중에 해당사항이 없는 중성" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setIndicate(5)
                            }} />:
                            <CustomButton
                            title="위 내용 중에 해당사항이 없는 중성" theme="secondary" hasMarginBottom
                            onPress={() => {
                                          setIndicate(5)
                        }} />
                    }
                    <Text style={styles.error}>{indicateError}</Text>
                   
                   
                    <View style={styles.buttons}/>
                    <CustomButton title="다음" onPress={
                        indicateHandler
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
    red: {
        backgroundColor:"pink"
    },
    error: {
        color: "red",
        marginTop:10
    }
})
export default GetIndicate