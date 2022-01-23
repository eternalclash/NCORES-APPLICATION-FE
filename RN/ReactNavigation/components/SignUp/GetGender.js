import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const GetGender = ({ navigation, route }) => {
    const check = useSelector((state) => state.sign.check); 
    const genderError = useSelector(state => state.sign.genderError)
    const [gender, setGender] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        if (check)
        {   
            dispatch(signActions.check(false))
            dispatch(signActions.genderError(""))
            navigation.navigate("GetAge")
            }
    }, [check])
    useEffect(() => {
     
    }, [genderError])
    const genderHandler = () => {
        dispatch(signActions.setGenderAPI(gender))
        // navigation.navigate("GetAge")
        // if (check)
        //     navigation.navigate("GetAge")
    }

   
    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>이제 플라롭스로 관리하세요</Text>
                <Text style={styles.text1}>성별을 선택해주세요</Text>
                <View style={styles.form}>
                    <View style={styles.row}>
                    {
                            gender == "Male" ?  <Pressable onPress={() => { setGender("") }}>
                            <View style={[styles.buttons2,styles.buttonColor]}>
                   <Text style={{fontSize:18}}>남자</Text>
                   </View>          
                   </Pressable>
                                :  <Pressable onPress={() => { setGender("Male") }}>
                                <View style={[styles.buttons2]}>
                       <Text style={{fontSize:18}}>남자</Text>
                       </View>          
                       </Pressable>
                    }
                   {
                            gender == "Female" ?  <Pressable onPress={() => { setGender("") }}>
                            <View style={[styles.buttons2,styles.buttonColor]}>
                   <Text style={{fontSize:18}}>여자</Text>
                   </View>          
                   </Pressable>
                       :  <Pressable onPress={() => { setGender("Female") }}>
                       <View style={[styles.buttons2]}>
              <Text style={{fontSize:18}}>여자</Text>
              </View>          
              </Pressable>       
                        }
                       
                      
                    </View>
                    <Text style={styles.error}>{genderError}</Text>
                    <View style={styles.buttons}/>
                    <CustomButton title="다음" onPress={
                        genderHandler
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
    buttons2: {
        width: 158,
        height: 96,
        borderWidth: 0.7,
        justifyContent: "center",
        alignItems:"center",
    },
    buttonColor: {
      backgroundColor:"pink",  
    },
    error: {
        color: "red",
        marginTop:10,
    }
})
export default GetGender