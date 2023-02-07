import React from 'react'
import { Text, View, StyleSheet,Image,useWindowDimensions, ImageBackground } from 'react-native'

import CameraButton from './Camera/CameraButton'
const CameraPage = () => {
    const { width } = useWindowDimensions();
    return (
        
            <View style={{ flex: 1, justifyContent: 'center', alignItems:'center',}}>
            <ImageBackground source={require("../image/face.png")} style={{ height: 800, width: '100%' }} resizeMode='cover' >
                
                <View style={{marginTop:550,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.step}>너무 밝거나 어두운 곳을 피하고</Text>
            <Text style={styles.info}>얼굴 정면이 다 나오도록 찍어주세요</Text>
          
                </View>
              
           
            </ImageBackground>
            <View>
                
            </View>
            <CameraButton/>
           </View>
           
           
          
       
    )
}
const styles = StyleSheet.create({
    main: {
     
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height:600,
    },
 
    step: {
        
       
   
        fontSize:24,
        justifyContent: 'center',
        alignItems:'center'
    },
    info: {
        
            marginTop: 20,
        
         
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
