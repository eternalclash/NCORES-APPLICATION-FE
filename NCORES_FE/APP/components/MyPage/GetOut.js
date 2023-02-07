import React, {useState,useEffect,useRef} from 'react'
import { Text, View, StyleSheet,TextInput,Keyboard } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const GetOut = ({ navigation, route }) => {
    const deleteUser = useSelector((state) => state.sign.deleteUser); 
    const deleteError = useSelector((state) => state.sign.deleteError);
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
   
    const load = async() => {
        try {
    
            await AsyncStorage.removeItem('token')
            console.log( await AsyncStorage.removeItem('token'))
            
            
        } catch (e) {
            console.log(e)
       }
    }
  
    useEffect(() => {
        if (deleteUser)
        {   load
            navigation.navigate("Thank")
           }
    }, [deleteUser])
    


   

    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>회원 탈퇴</Text>
                <Text style={styles.text1}>회원 탈퇴를 원하시면 비밀번호를 입력해 주세요</Text>
                <View style= {styles.form}>
                    <BorderedInput placeholder="비밀번호"
                        placeholderTextColor="#808080"
                 
                    onChangeText={(value) => setEmail(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    returnKeyType="done"
                    
                    /> 
                    <Text style={{ marginTop: 10, color: "red" }}>{deleteError}</Text>
                  
                    <View style={styles.buttons} />
                    
                    <CustomButton title="다음" onPress={()=>dispatch(signActions.deleteUserAPI(email))} style={styles.buttons}/>
                    </View>
            </View>   
        </>
    )
}
const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        alignItems: 'center',
        paddingTop:52,
        backgroundColor: "white",

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
export default GetOut