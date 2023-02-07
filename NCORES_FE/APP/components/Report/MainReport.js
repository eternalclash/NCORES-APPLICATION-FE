import React, {useEffect,useState} from 'react'
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Pressable, ScrollView } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/EvilIcons'
import { StackedBarChart } from 'react-native-svg-charts'
import CustomButton from '../CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as reportActions } from '../../redux/modules/report'
import { actionCreators as markActions } from '../../redux/modules/mark'
import { actionCreators as skinActions } from '../../redux/modules/skin'
import { actionCreators as photoActions} from '../../redux/modules/photo'
import { actionCreators as cosActions } from '../../redux/modules/cosmetics'
//삼항연산자 처리 차트 에러 걸리면~
const MainReport = ({ navigation }) => {
    const { top } = useSafeAreaInsets()
    const dispatch = useDispatch();
    const cameraReport = useSelector(state => state.report.cameraReport)
    const aqua = useSelector(state=>state.report.aqua)
    const oill = useSelector(state=>state.report.oill)
    const pigment = useSelector(state=>state.report.pigment)
    const sensitive = useSelector(state=>state.report.sensitive)
    const winkle = useSelector(state => state.report.winkle)
    const cameraCheck = useSelector(state => state.photo.checkPhoto)
    const [info, setInfo] = useState("")
    const data = [
        {
      
            apples: 70,
            banana:30,
           
        },
      
    ]
    const colors = ['#323632', '#F0DFDE']
    const keys = ['apples','banana']
    console.log(aqua,"아쿠아")
    console.log(oill,"오일")
    console.log(pigment,"색조")
    console.log(sensitive,"민감성")
    console.log(winkle,"주름")
    useEffect( () => {
            console.log("에러 로깅 리포트")
            dispatch(reportActions.cameraReportAPI())
         
    
    },[cameraCheck])
   
 
    if (cameraCheck==0)
    { 
        return (
            <View style={{ flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}  nestedScrollEnabled >
            
            <View style={styles.main}>
                <View style={{ height: top }}></View>
                <View style={styles.main1}>
             
                  
                    <View style={styles.row1}>
                        <Text style={styles.profileText1}>피부 점수</Text>
                 
                    </View>
               
                    <View style={styles.mainImage}>
                    
                <Image
                    source={require("../../image/reportImage.png")}
                    style={styles.cosmetic}
                    resizeMode="cover"
                        />
                        <Text style={styles.profileText2}>오늘의 피부점수</Text>
                            <Text style={styles.profileText}>{cameraReport.totalScore}</Text>
                            <Text style={styles.profileText3}>{cameraReport.content}</Text>
                    </View>
                <View style={styles.main}>
                 
                                
                            <View style={styles.chart}> 
                                <View style={styles.filter2}>
                                <Text style={styles.filter2}>수분</Text>
                                </View>
                             
                                <View style={styles.filter1}>
                                <Text style={styles.filter}>수분</Text> 
                                    <Text >{cameraReport.dry}점</Text>      
                            </View>
                                
                                
                                       
                                <StackedBarChart
                    style={{ height: 25 }}
                    contentInset={{ top: 30, bottom: 20 }}
                    keys={keys}
                    colors={colors}
                    data={aqua ? aqua: data}
                    showGrid={false}
                                  
                                    horizontal="true"
                                />          
                         
                </View>
                        
                <View style={styles.chart}> 
                                <View style={styles.filter2}>
                                <Text style={styles.filter2}>유분</Text>
                                </View>
                             
                                <View style={styles.filter1}>
                                <Text style={styles.filter}>유분</Text> 
                                    <Text >{cameraReport.oilIndicate}점</Text>      
                            </View>
                                
                                
                                       
                                <StackedBarChart
                    style={{ height: 25 }}
                    contentInset={{ top: 30, bottom: 20 }}
                    keys={keys}
                    colors={colors}
                    data={aqua ? oill : data}
                    showGrid={false}
                                   
                                    horizontal="true"
                                />          
                         
                            </View>
                            <View style={styles.chart}> 
                                <View style={styles.filter2}>
                                <Text style={styles.filter2}>색조성</Text>
                                </View>
                             
                                <View style={styles.filter1}>
                                <Text style={styles.filter}>색조성</Text> 
                                    <Text >{cameraReport.pigment}점</Text>      
                            </View>
                                
                                
                                       
                                <StackedBarChart
                    style={{ height: 25 }}
                    contentInset={{ top: 30, bottom: 20 }}
                    keys={keys}
                    colors={colors}
                    data={aqua? pigment: data}
                    showGrid={false}
                                  
                                    horizontal="true"
                                />          
                         
                            </View>
                            <View style={styles.chart}> 
                                <View style={styles.filter2}>
                                <Text style={styles.filter2}>민감성</Text>
                                </View>
                             
                                <View style={styles.filter1}>
                                <Text style={styles.filter}>민감성</Text> 
                                    <Text >{cameraReport.sensitivity}점</Text>      
                            </View>
                                
                                
                                       
                                <StackedBarChart
                                    style={{ height: 25 }}
                                    contentInset={{ top: 30, bottom: 20 }}
                    keys={keys}
                    colors={colors}
                    data={aqua ? sensitive : data}
                    showGrid={false}
                                   
                                    horizontal="true"
                                />          
                         
                            </View>
                            
                        
                            <View style={styles.chart}> 
                                <View style={styles.filter2}>
                                <Text style={styles.filter2}>주름성</Text>
                                </View>
                             
                                <View style={styles.filter1}>
                                <Text style={styles.filter}>주름성</Text> 
                                    <Text >{cameraReport.winkle}점</Text>      
                            </View>
                                
                                
                                       
                                <StackedBarChart
                   style={{ height: 25 }}
                   contentInset={{ top: 30, bottom: 20 }}
                    keys={keys}
                    colors={colors}
                    data={aqua? winkle:data}
                    showGrid={false}
                                 
                                    horizontal="true"
                                />          
                         
                </View>
               
                <View style={styles.information1}>
                        <Pressable onPress={()=>setInfo(true)}>
                        <View style={{flexDirection:"row",alignContent:"center"}}>
                                <Text style={styles.informationKeyword}>내가 고른 성분</Text> 
                            <Image source={require("../../image/info.png")} style={{width:18,height:18,marginTop:4,marginLeft:4}}/>    
                </View>                           
                    </Pressable>
                      <Icon name="chevron-right" size={45}></Icon>
                    </View>
                    {
                        info?  <View style={{justifyContent:"center",alignItems:"flex-start",marginHorizontal:20,height:100,backgroundColor:"#F0DFDE"}}>
                        <View style={styles.info}>
                        <Text style={{textAlign:'left'}}>EWG의 성분 안전성 지표를 제공합니다 </Text>
                        <Text style={{textAlign:'left'}}>녹색:비교적 안전</Text>
                        <Text style={{textAlign:'left'}}>황색:일부 성분 주의</Text>
                                <Text style={{ textAlign: 'left' }}>적색:비교적 위험</Text>
                               
                                
                            </View>  
                            <Pressable onPress={()=>setInfo(false)} style={{width:30,height:30,position:"absolute",top:5,right:5}}>
                                <Image style={{width:30,height:30,position:"absolute",top:5,right:5}} source={require("../../image/close.png")}></Image>
                                </Pressable>
                        </View> : <></>
                    }
                            {cameraReport?cameraReport.elementList.map((e, index) => {
                                return (
                                    <View style={styles.information}>
                                         <Pressable onPress={() => {

                                                navigation.navigate("ElementList",{id:e.id,name:e.korName})
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
                                                 <Pressable onPress={()=>dispatch(markActions.markElementAPI(e.id))}><Image source={require('../../image/false.png')}  style={{ width: 28, height: 28,marginRight:20  }} resizeMode="cover"></Image>
                                                </Pressable>   
                                        }
                                </View>
                     ) 
                 }):<></>}       
               
                      
                       
                          
                   
              
                    </View>
                    </View>
                  
                    <View style={{ height: top }}></View>
                </View>
            </ScrollView>
              <View style={{position:"absolute",flexDirection:'row',bottom:0,justifyContent:"center",alignItems:"center",marginTop:30,zIndex:99}}>
              <Pressable style={{height:70,borderWidth:1,width:"50%",justifyContent:'center',alignItems:'center',backgroundColor:"#F0DFDE"}}  onPress={() => {
        dispatch(skinActions.getBoumanAPI())
        dispatch(skinActions.getListAPI())
        navigation.navigate("MainPage")
        
    }}>
              <Text style={{fontSize:18}}>다시하기</Text>
              </Pressable>
              <Pressable style={{height:70,borderWidth:1,width:"50%",justifyContent:'center',alignItems:'center',backgroundColor:"black"}}  onPress={() => {
        dispatch(skinActions.getBoumanAPI())
        dispatch(skinActions.getListAPI())
        navigation.navigate("MainPage")
        
    }}>
              <Text style={{fontSize:18,color:'white'}}>계속하기</Text>
              </Pressable>
                </View>
                </View>
        )
    }

    if(!winkle)
return (
    <View ></View>
)
}

const styles = StyleSheet.create({
    row3: {
        flexDirection: 'row',
        width: '100%',
        justifyContent:"space-around"
    },
    filter2: {
        fontSize: 20,
        flexDirection: 'row',
        justifyContent:'center',
        marginTop:20,
    },
    filter1: {
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:20,
    },
    chart: {
       
       marginHorizontal:20,
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
      
    },
    row1: {
        flexDirection: 'row',
        paddingLeft:20,
        
    },
    profileText1: {
        fontSize: 20,
        marginTop: 20,
    
        marginRight:20,
    },
    profileText: {
        fontSize: 20,
        marginTop:5,
    },
    profileText2: {
        fontSize: 15,
        marginTop:15,
    },
    profileText3: {
        fontSize: 14,
        marginTop: 15,
        width: "90%",
        marginBottom:40,
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
        backgroundColor:"#F5EBE8"
    },
    main2: {
        position:"relative",
        flex: 1,
        backgroundColor:"#F5EBE8"
    },
    main1: {
        flex: 1,
    
    },
    mainImage: {
        height:500,
        marginHorizontal: 20,
        borderTopColor:"gray",
        borderBottomColor:"gray",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginTop: 20,
        
        alignItems: "center",
        justifyContent:"center",
    },
    cosmetic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop:20,
    },
    information: {
        flexDirection: "row",
        marginVertical: 13,
        justifyContent: "space-between",
        alignItems:"center",
        marginLeft:10,
        width:"100%",
      
    },
    information1: {
        flexDirection: "row",
        marginTop: 50,
        justifyContent: "space-between",
        alignItems:"center",
        marginLeft: 15,
        
       
      
    },
    informationKeyword: {

        fontSize: 20,
        fontWeight: "500",
    },
    informationKeyword1: {
        marginLeft:20,
         fontSize: 18,
   
     },
    informationSubKeyword: {
        marginVertical: 7,
        fontSize: 18,
        fontWeight: "300",
    },
    

})

export default MainReport