import React, {useState,useEffect,useMemo} from 'react'
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Pressable, ScrollView } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { actionCreators as myActions } from '../../redux/modules/myPage'
import Icon from 'react-native-vector-icons/EvilIcons'
import { useDispatch,useSelector } from 'react-redux'
import ShopCarousel from '../Carousel/Carousel'
import MyCosmeticsCarousel from '../Carousel/MyCosmeticsCarousel'
import MyElementsCarousel from '../Carousel/MyElementsCarousel'
import { actionCreators as markActions } from '../../redux/modules/mark'
const MyPage = ({ navigation }) => {
    const dispatch = useDispatch();
    const myCosmetics = useSelector(state=>state.myPage.cosmetics)
    const myElements = useSelector(state => state.myPage.elements)
    const myInfo = useSelector(state => state.myPage.info)
    const [cosmetic,setCosmetic] = useState("")
    const [element, setElement] = useState("")
    const [info, setInfo] = useState("")
    useMemo(() => {
        // dispatch(cosmeticActions.mainCosmeticAPI())
        // dispatch(cosmeticActions.categoryCosmeticAPI())
        // dispatch(cosmeticActions.simpleCosmeticAPI())
        dispatch(myActions.userCosmeticAPI())
        setCosmetic(myCosmetics)
        dispatch(myActions.userElementsAPI())
        setElement(myElements)
        dispatch(myActions.userInfoAPI())
    }, [cosmetic,element])
    const {top} = useSafeAreaInsets()
    return (
        <View style={styles.main}>
            <View style={{ height: top }}></View>
            <View style={styles.main1}>
         
                <View style={styles.right}>
                    <Pressable onPress={()=>navigation.navigate("MyLogOut")}>
                    <Icon  name="navicon" size={30}></Icon>
                    </Pressable>
                      
                        </View>
                   
           
                <View style={styles.mainImage}>
                
            <Image
                source={require("../../image/null.png")}
                style={styles.cosmetic}
                resizeMode="cover"
                    />
                    <Text style={styles.profileText}>{myInfo}</Text>
                </View>
            <View style={styles.main}>
                    <View style={styles.information}>
                        <Pressable onPress={()=>setInfo(true)}>
                        <View style={{flexDirection:"row",alignContent:"center"}}>
                                <Text style={styles.informationKeyword}>내가 고른 성분</Text> 
                            <Image source={require("../../image/info.png")} style={{width:18,height:18,marginTop:4,marginLeft:4}}/>    
                </View>                           
                    </Pressable>


                      
                    </View>
                    {
                        info?  <View style={{justifyContent:"center",alignItems:"center",marginHorizontal:10,}}>
                        <View style={styles.info}>
                        <Text style={{textAlign:'center'}}>EWG의 성분 안전성 지표를 제공합니다 </Text>
                        <Text style={{textAlign:'center'}}>녹색:비교적 안전</Text>
                        <Text style={{textAlign:'center'}}>황색:일부 성분 주의</Text>
                                <Text style={{ textAlign: 'center' }}>적색:비교적 위험</Text>
                                <Pressable onPress={()=>setInfo(false)} style={{width:30,height:30,position:"absolute",top:5,right:5}}>
                                <Image style={{width:30,height:30,position:"absolute",top:5,right:5}} source={require("../../image/close.png")}></Image>
                                </Pressable>
                                
                            </View>  
                       
                        </View> : <></>
                    }
                   
                   
                    {myElements[0] ?
                        
                        
                        <ScrollView style={{height:259}}>
                            {
                                   myElements.map((e, index) => {
                                    return (
                                     
                                            <View style={styles.information1}>
                                                <Pressable onPress={() => {
    
                                                    navigation.navigate("MyElementList", { id: e.id, name: e.korName })
                                                }}>
                                                    <View style={styles.row}>
                                              
                                                        <View style={styles.circle}>
                                                            <Image style={styles.circle} source={{ uri: e.img }} resizeMode='contain'></Image>
                                                        </View>
                                                        <Text style={styles.informationKeyword1}>{e.korName}</Text>
                                                   
                                                    </View>
                                                </Pressable>
                                     
                               
                                                {
                                                    e.likeCheck ?
                                                        <Pressable onPress={()=>dispatch(markActions.markElementAPI(e.id))}>
                                                            <Image source={require('../../image/true.png')} style={{ width: 28, height: 28, marginRight: 20 }} resizeMode="cover"></Image>
                                                        </Pressable>
                                                    
                                                   
                                                        :
                                                        <Pressable onPress={()=>dispatch(markActions.markElementAPI(e.id))}><Image source={require('../../image/false.png')} style={{ width: 28, height: 28, marginRight: 20 }} resizeMode="cover"></Image>
                                                        </Pressable>
                                                }
                                            </View>
                                        
                                    )
                                    
                     })
                        }
                         
                        </ScrollView> : <View style={{ height: 150, backgroundColor: "lightgrey", marginHorizontal: 20, borderRadius: 4,justifyContent:'center',alignItems:"center" }}>
                        <Text>피부 진단을 하면</Text>
                        <Text>나에게 맞는 성분을 찾을 수 있어요</Text>
                        <Text>하트를 눌러 기억하세요</Text>
                        </View>}       
          
               
             <View style={styles.information}>
                <Text style={styles.informationKeyword}>내가 찜한 화장품</Text>
             
                    </View>
                    {
                        myCosmetics[0] ? <MyCosmeticsCarousel myCosmetics={myCosmetics} /> : 
                        <View style={{ height: 150, backgroundColor: "lightgrey", marginHorizontal: 20, borderRadius: 4,justifyContent:'center',alignItems:"center" }}>
                        <Text>아직 찜한 상품이 없어요</Text>
                        <Text>마음에 드는 상품엔 하트를 눌러보세요</Text>
                        
                        </View>
                    }
            
                </View>
                </View>
            </View>
   
    )
}

const styles = StyleSheet.create({
    info: {
        height: 100,
        width: '100%',
        backgroundColor: "#F0DFDE",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft:10
    },
    informationKeyword1: {
        marginLeft:10,
         fontSize: 15,
         fontWeight: "500",
     },
    informationKeyword: {
        
        fontSize: 20,
        fontWeight: "500",
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
      
    },
    profileText: {
        fontSize: 20,
        marginTop:15,
    },
    lowButton: {
        flex: 0.5,
       
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
       
    },
    right: {

        position: 'absolute',
        right: 10,
        top:10,
        zIndex:999,
        
    },
    fontSize: {
    fontSize:20
    },
    main: {
        position:"relative",
        flex: 1,
        backgroundColor: "white",
    },
    main1: {
        flex: 1,
        height:20,
    },
    mainImage: {
        flex: 0.5,
        backgroundColor: "#F5EBE8",
        alignItems: "center",
        justifyContent:"center",
    },
    cosmetic: {
        width: 72,
        height: 72,
        borderRadius:75,
    },
    information: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-between",
        alignItems:"center",
        marginRight:5,
        paddingLeft: 15,
        
    },
    information1: {
        flexDirection: "row",
        marginVertical: 5,
        justifyContent: "space-between",
        alignItems:"center",
        paddingLeft: 10,
      
    },
    informationKeyword: {

        fontSize: 20,
        fontWeight: "500",
    },
    informationSubKeyword: {
        marginVertical: 7,
        fontSize: 15,
        fontWeight: "300",
    },
    

})

export default MyPage
