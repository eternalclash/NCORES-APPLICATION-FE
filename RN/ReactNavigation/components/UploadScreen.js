import React, {useEffect, useRef, useState} from 'react'
import { View,StyleSheet,TextInput,Image,useWindowDimensions,Text,Button } from 'react-native'
import { useRoute } from '@react-navigation/native';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { actionCreators as photoActions } from '../redux/modules/photo';
const UploadScreen = () => {
    const route = useRoute();
    const { res } = route.params || {};
    const { width } = useWindowDimensions();
    console.log(res.assets[0])
    const dispatch = useDispatch();
    const PhotoHandler = () => {
     
        const formData = new FormData();
        formData.append("image", {
            uri: res.assets[0].uri, type: res.assets[0].type, name: res.assets[0].fileName
        })
        dispatch(photoActions.postImageAPI(formData))
    }
    return (
        <View style={styles.block}>
            <Image
                source={{ uri: res.assets[0]?.uri }}
                style={[styles.image]}
                resizeMode="cover"
            />
             <Text style={styles.step}>잘 찍으셨네요!</Text>
            <Text style={styles.info}>이 사진으로 피부 진단을 시작할게요</Text>
            <View style={styles.row}>
            <CustomButton theme="gender" title="다시하기"/>
            <CustomButton theme="gender" title="진단하기" color="red" onPress={PhotoHandler}/>
            </View>
           
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
        marginHorizontal:'32%',
        flexDirection: 'row',
        fontSize:24,
        justifyContent: 'center',
        alignItems:'center'
    },
    info: {
        
            marginTop: 20,
            marginHorizontal:50,
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
    row: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 30,
        justifyContent: 'space-around'
        
    }
});

export default UploadScreen
