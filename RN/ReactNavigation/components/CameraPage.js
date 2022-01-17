import React from 'react'
import { Text, View, StyleSheet,Image,useWindowDimensions } from 'react-native'
import CameraButton from './Camera/CameraButton'
const CameraPage = () => {
    const { width } = useWindowDimensions();
    return (
        <>
            <View style={styles.main}>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}}
                style={[styles.image, { height: width }]}
                resizeMode="cover"
            />
            </View>  
            <Text style={styles.step}>Step 1</Text>
            <Text style={styles.info}>원안에 얼굴 정면을 맞춰주세요</Text>
            <CameraButton/>
           
          
        </>
    )
}
const styles = StyleSheet.create({
    main: {
     
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height:600,
    },
    main1: {
     
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        flex:1,
    },
    step: {
        marginTop: 20,
        marginHorizontal:'40%',
        flexDirection: 'row',
        fontSize:24,
        justifyContent: 'center',
        alignItems:'center'
    },
    info: {
        
            marginTop: 20,
            marginHorizontal:70,
            flexDirection: 'row',
            fontSize:20,
            justifyContent: 'center',
            alignItems:'center'
        
    },
    circle: {
        backgroundColor: 'white',
        borderRadius: 250,
        height: 300,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: { width: '100%',borderRadius: 250, },
})

export default CameraPage
