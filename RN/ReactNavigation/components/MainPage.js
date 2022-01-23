import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Pressable, ScrollView } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomButton from './CustomButton'
import MainTab from './Tab/MainTab'
import Icon from 'react-native-vector-icons/EvilIcons'
import { useDispatch,useSelector } from 'react-redux'
import Carousel from './Carousel/Carousel'
import ShopCarousel from './Carousel/Carousel'
import { useEffect } from 'react'
import { actionCreators as cosmeticActions } from '../redux/modules/cosmetics'
const MainPage = ({ navigation }) => {
    const { top } = useSafeAreaInsets()
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(cosmeticActions.mainCosmeticAPI())
        // dispatch(cosmeticActions.categoryCosmeticAPI())
        // dispatch(cosmeticActions.simpleCosmeticAPI())
        dispatch(cosmeticActions.elementCosmeticAPI())
    }, [])
    return (
        
        <View style={styles.main}>
            <View style={{ height: top }}></View>
            <View style={styles.main}>
                <View style={styles.row}>
                <View>
                    <Text style={styles.fontSize}>Logo</Text>
                </View>
                <View style={styles.right}>
                    <Pressable onPress={()=>{navigation.navigate("CameraInfo")}} >
                        <Icon name="camera" size={40} />
                        </Pressable>
                    </View>
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
                <ShopCarousel />
                <View style={styles.lowButton}>
                    <Pressable>
                        <Text>차원이 다른 뷰티 디바이스</Text>
                        <Text  style={styles.fontSize}>플라럽스 기기 연결하기</Text>
                    </Pressable>
                </View>
            </View>
            </View>
   
    )
}

const styles = StyleSheet.create({
    lowButton: {
        flex: 0.3,
        backgroundColor:"white",
        marginHorizontal:20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "white",
        paddingLeft:15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
       
    },
    right: {
        alignItems: 'flex-end',

        
    },
    fontSize: {
    fontSize:20
    },
    main: {
        flex: 1,
 
    },
    mainImage: {
        flex: 0.5,
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
