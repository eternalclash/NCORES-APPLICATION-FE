import React, {useEffect, useRef, useState} from 'react'
import { View,StyleSheet,Pressable,TextInput,Image,useWindowDimensions,Text,Button } from 'react-native'
import { NavigationContainer, useRoute } from '@react-navigation/native';
import CustomButton from './CustomButton';
import { useDispatch,useSelector } from 'react-redux';
import { actionCreators as photoActions } from '../redux/modules/photo';
import CameraLoading from './CameraLottie';
const UploadScreen = ({navigation}) => {
    const route = useRoute();
    const { res } = route.params || {};
    const { width } = useWindowDimensions();
    console.log(res.assets[0])
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const cameraCheck = useSelector(state => state.photo.checkPhoto)
    useEffect(() => {
        if (cameraCheck=="success")
        {   setLoading(false)
            dispatch(photoActions.checkPhoto(0))
            navigation.navigate("MainReport")
        }
        if (cameraCheck=="fail")
        {   setLoading(false)
            dispatch(photoActions.checkPhoto(0))
            navigation.navigate("ErrorUploadScreen")
            }
    }, [cameraCheck])
    const PhotoHandler = () => {
        setLoading(true)
        const formData = new FormData();
        formData.append("image", {
            uri: res.assets[0].uri.replace('file://', ''), type: res.assets[0].type, name: res.assets[0].fileName
        })
        dispatch(photoActions.postImageAPI(formData))
    }
    if(!loading)
    return (
        <View style={styles.block}>
            <Image
                source={{ uri: res.assets[0]?.uri }}
                style={[styles.image]}
                resizeMode="cover"
            />
             
            <Text style={styles.info}>이 사진으로 피부 진단을 시작할게요</Text>
            <View style={styles.row}>
                <CustomButton theme="gender" title="다시하기" onPress={()=>{navigation.pop()}}/>
            <CustomButton theme="gender" title="진단하기" color="red" onPress={()=>navigation.navigate("MainReport")}/>
            </View>
            <View style={styles.row}>
            <Pressable style={styles.form} onPress={()=>navigation.navigate("CameraPage")}>   
            <View >     
                   
                    <Text style={styles.textMedium1}>다시하기</Text>    
                   
                    </View>
            </Pressable>
            
            <Pressable style={styles.form1} onPress={PhotoHandler}>   
            <View >     
                   
                    <Text style={styles.textMedium}>진단하기</Text>    
                   
                    </View>
                    </Pressable>

            </View>
        
        </View>
    )

    if (loading)
        return (
            <CameraLoading/>
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
        width: '50%',
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

export default UploadScreen
