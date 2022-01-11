import React, {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'

const GetFinish = ({navigation, route}) => {
   
    
    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>회원가입 완료</Text>
                <View style= {styles.form}>
               
                    <View style={styles.buttons}/>
                    <CustomButton title="로그인 하기" onPress={() => {
                      navigation.navigate("SignIn")
                    }} style={styles.buttons}/>
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
    }
})
export default GetFinish
