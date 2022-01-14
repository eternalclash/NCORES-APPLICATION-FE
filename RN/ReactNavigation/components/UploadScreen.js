import React, {useEffect, useRef, useState} from 'react'
import { View,StyleSheet,TextInput,Image,useWindowDimensions,Text,Button } from 'react-native'
import { useRoute } from '@react-navigation/native';
import CustomButton from './CustomButton';

const UploadScreen = () => {
    const route = useRoute();
    const { res } = route.params || {};
    const { width } = useWindowDimensions();
    console.log(res.assets[0].uri)
    return (
        <View style={styles.block}>
            <Image
                source={{ uri: res.assets[0]?.uri }}
                style={[styles.image]}
                resizeMode="cover"
            />
             <Text style={styles.step}>Step 1</Text>
            <Text style={styles.info}>원안에 얼굴 정면을 맞춰주세요</Text>
            <CustomButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    image: { height:600, },
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
});

export default UploadScreen
