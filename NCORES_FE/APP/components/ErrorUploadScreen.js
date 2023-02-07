import React, {useEffect, useRef, useState} from 'react'
import { View,StyleSheet,Pressable,TextInput,Image,useWindowDimensions,Text,Button } from 'react-native'
import { NavigationContainer, useRoute } from '@react-navigation/native';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { actionCreators as photoActions } from '../redux/modules/photo';
import CameraLoading from './CameraLottie';
const ErrorUploadScreen = ({navigation}) => {
    const route = useRoute();
    const { res } = route.params || {};
    const { width } = useWindowDimensions();
    // console.log(res.assets[0])

  
    const PhotoHandler = () => {
        setLoading(true)
        const formData = new FormData();
        formData.append("image", {
            // uri: res.assets[0].uri, type: res.assets[0].type, name: res.assets[0].fileName
        })
        dispatch(photoActions.postImageAPI(formData))
    }

    return (
        <View style={styles.block}>
            <Image
                // source={{ uri: res.assets[0]?.uri }}
                style={[styles.image]}
                resizeMode="cover"
            />
             <Text style={styles.step}>앗! 잘 보이지 않아요</Text>
            <Text style={styles.info}>밝은 곳에서 사진을 찍어주세요</Text>
            <View style={styles.row}>
                
            <CustomButton theme="gender" title="진단하기" color="red" onPress={()=>navigation.navigate("MainReport")}/>
            </View>
            <View style={styles.row}>
            <Pressable style={styles.form} onPress={()=>navigation.navigate("CameraPage")}>   
            <View >     
                   
                    <Text style={styles.textMedium1}>다시하기</Text>    
                   
                    </View>
            </Pressable>
            
          
            </View>
        
        </View>
    )

 
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
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
        marginHorizontal:'20%',
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
        alignItems: 'center',
        marginBottom:80,
        
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
        bottom: 0,
        justifyContent: 'space-around'
        
    }, 
     textMedium: {
        color:"white",
        fontSize: 20,
     
    },
    textMedium1: {
        color:"black",
        fontSize: 20,
       
    },
    form: {
        backgroundColor:"white",
        width: '100%',
        height:60,
        
        justifyContent: "center",
        alignItems:"center",
        borderWidth:1
    },
    form1: {
        backgroundColor:"black",
        width: '50%',
        height:60,
        
        justifyContent: "center",
        alignItems:"center",
      
    },
});

export default ErrorUploadScreen
