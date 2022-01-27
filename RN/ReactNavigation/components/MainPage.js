import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Pressable, ScrollView, ImageBackground } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomButton from './CustomButton'
import MainTab from './Tab/MainTab'
import Icon from 'react-native-vector-icons/EvilIcons'
import { useDispatch,useSelector } from 'react-redux'
import Carousel from './Carousel/Carousel'
import ShopCarousel from './Carousel/Carousel'
import { useEffect,useState } from 'react'
import { actionCreators as cosmeticActions } from '../redux/modules/cosmetics'
const MainPage = ({ navigation }) => {
    const { top } = useSafeAreaInsets()
    const dispatch = useDispatch();
    const mainCos = useSelector(state => state.cosmetics.main)
    const [cos,setCos] = useState()
    useEffect(() => {
        dispatch (cosmeticActions.mainCosmeticAPI())
          // dispatch(cosmeticActions.categoryCosmeticAPI())
          // dispatch(cosmeticActions.simpleCosmeticAPI())
          // dispatch(cosmeticActions.elementCosmeticAPI())
         setCos(mainCos)
      }, [cos])
    console.log(mainCos)
    return (
    
        <View style={styles.main}>
            <View style={{ height: top }}></View>
       
            <View style={styles.main}>
                <View style={styles.row}>
                    
                    <Image source={require('../image/PLALUVS.png' )} style={{width:105,height:14,marginLeft:10,}} resizeMode='stretch'></Image>
                      
                        
                    <Pressable onPress={()=>{navigation.navigate("CameraInfo")}} style={styles.right}>              
                    <View >
                    
                            <Image source={require('../image/cameraPlus.png')} style={{ width: 22,
        height:22,marginRight:10,}} resizeMode='center'/>
                     
                    </View>
                    </Pressable>
                    </View>
            <View style={styles.mainImage}>
            <Image
                source={require('../image/mainTop.png')}
                style={styles.cosmetic}
                resizeMode="cover"
            />
            </View>
            <View style={styles.information}>
                <Text style={styles.informationKeyword}>민감한 피부엔 이런 제품</Text>
                <Text style={styles.informationSubKeyword}>비슷한 고민을 가진 고객님들은 이런 제품을 찜했어요</Text>
            </View>
                {mainCos ? <ShopCarousel mainCos={mainCos} /> : <></>}
                <Pressable style={styles.lowButton}>
                    <View >
                        <Pressable style={styles.bgImage} onPress={()=>navigation.navigate("BlueTooth")}>
                    <ImageBackground source={require("../image/mainBottom.png")} style={styles.bgImage}></ImageBackground>
                        <View style={styles.onText}>
                        <Text>차원이 다른 뷰티 디바이스</Text>
                        <Text  style={styles.fontSize}>플라럽스 기기 연결하기</Text>
                        </View>
                        </Pressable>
                   
                    </View>
                    </Pressable>
            </View>
            </View>
   
    )
}

const styles = StyleSheet.create({
    onText: {
        position: "absolute",
        bottom: 35,
        left:20,
    },
    bgImage: {width: '100%', height: '100%',resizeMode:"container"},
    lowButton: {
        flex: 0.8,
        backgroundColor:"white",
        marginHorizontal: 20,
        marginTop:10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 6,
        
        borderColor: "white",
    
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:10,
    },
    right: {
        alignItems: 'flex-end',
       

        
    },
    fontSize: {
        fontSize: 20,
        marginTop: 6,
    },
    main: {
        flex: 1,
 
    },
    mainImage: {
        width: 375,
        height:228,
        justifyContent: "center",
        alignItems:"center",
        
    },
    cosmetic: {
        flex:1,
    },
    information: {
        marginVertical:20,
        paddingLeft: 10,
      
    },
    informationKeyword: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "500",
    },
    informationSubKeyword: {
        marginVertical: 10,
        fontSize: 15,
        fontWeight: "300",
    },
    

})

export default MainPage
