import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const GetGender = ({ navigation, route }) => {
    const check = useSelector((state) => state.sign.check); 
    const [gender, setGender] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        if (check)
        {   
            dispatch(signActions.check(false))
            navigation.navigate("GetAge")
            }
    }, [check])
    const genderHandler = () => {
        dispatch(signActions.setGenderAPI(gender))
        // navigation.navigate("GetAge")
        // if (check)
        //     navigation.navigate("GetAge")
    }

   
    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>성별</Text>
                <View style={styles.form}>
                    <View style={styles.row}>
                    {
                            gender == "Male" ? <CustomButton theme="gender" color="blue" title="남자" onPress={() => setGender("Male")} />  
                       : <CustomButton theme="gender" title="남자" onPress={()=>setGender("Male")} />         
                    }
                   {
                            gender == "Female" ? <CustomButton theme="gender" color="red" title="여자" onPress={() => setGender("Female")} />  
                       : <CustomButton theme="gender" title="여자" onPress={()=>setGender("Female")} />         
                    }
                    </View>
                   
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
export default GetGender