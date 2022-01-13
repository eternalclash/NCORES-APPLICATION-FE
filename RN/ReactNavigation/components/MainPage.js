import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CameraButton from './Camera/CameraButton'
const MainPage = () => {
    return (
        <>
            <Text>메인페이지</Text>   
            <View style={styles.main}>
            <CameraButton/>
            </View>
          
        </>
    )
}
const styles = StyleSheet.create({
    main: {
        flex:1 ,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default MainPage
