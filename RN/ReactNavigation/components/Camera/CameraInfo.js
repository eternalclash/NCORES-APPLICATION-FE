import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
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
                <Text style={styles.text}>데일리 기록 안내사항</Text>
            
                <View style={styles.form}>     
                    <Pressable onPress={() => navigation.navigate(
                        "CameraCheck"
                    )}>
                    <Text style={styles.textMedium}>시작하기</Text>    
                    </Pressable>
                    </View>
            </View>   
        </>
    )
}
const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 104,
        position:"relative"
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom:80,
    },
    textMedium: {
        color:"white",
        fontSize: 20,
        marginBottom:5,
    },
    form: {
        backgroundColor:"black",
        width: '100%',
        height:70,
        position: "absolute",
        justifyContent: "center",
        alignItems:"center",
        bottom:0,
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