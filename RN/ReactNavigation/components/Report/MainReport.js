import React, {useEffect,useState} from 'react'
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Pressable, ScrollView } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/EvilIcons'
import { StackedBarChart } from 'react-native-svg-charts'
import CustomButton from '../CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as reportActions } from '../../redux/modules/report'
import { actionCreators as markActions } from '../../redux/modules/mark'
import { actionCreators as cosActions } from '../../redux/modules/cosmetics'
//삼항연산자 처리 차트 에러 걸리면~
const MainReport = ({ navigation }) => {
    const { top } = useSafeAreaInsets()
    const dispatch = useDispatch();
    const cameraReport = useSelector(state => state.report.cameraReport)
   
    const [dry,setDry] = useState([{apples:cameraReport.dry,banana:100-cameraReport.dry}])
    const [oil,setOil] = useState("")
    const [winkle,setWinkle] = useState([{apples:cameraReport.winkle,banana:100-cameraReport.winkle}])
    const [sense,setSense] = useState("")
    const [pigment,setPigment] = useState("")
    const data = [
        {
      
            apples: 70,
            banana:30,
           
        },
      
    ]
    const colors = ['black', 'lightgray']
    const keys = ['apples','banana']
  
    useEffect( () => {
       
            dispatch(reportActions.cameraReportAPI())
            setDry([{apples:cameraReport.dry,banana:100-cameraReport.dry}])
            setOil([{apples:cameraReport.oilIndicate,banana:100-cameraReport.oilIndicate}])
            setSense([{apples:cameraReport.sensitivity,banana:100-cameraReport.sensitivity}])
            setWinkle([{apples:cameraReport.winkle,banana:100-cameraReport.winkle}])
            setPigment([{apples:cameraReport.pigment,banana:100-cameraReport.pigment}])
    
    },[sense[0]] )
   
    console.log(dry)
    if (cameraReport)
    { 
        return (
        
            <ScrollView showsVerticalScrollIndicator={false}  nestedScrollEnabled >
            
            <View style={styles.main}>
                <View style={{ height: top }}></View>
                <View style={styles.main1}>
             
                  
                    <View style={styles.row1}>
                        <Text style={styles.profileText1}>피부 점수</Text>
                        <Text style={styles.profileText1}>추천 화장품</Text>
                    </View>
               
                    <View style={styles.mainImage}>
                    
                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"}}
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
                    data={dry[0].apples ? dry : data}
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
                    data={oil[0].apples ? oil : data}
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
                    data={pigment[0].apples? pigment: data}
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
                    data={sense[0].apples ? sense : data}
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
                    data={winkle[0].apples? winkle:data}
                    showGrid={false}
                                 
                                    horizontal="true"
                                />          
                         
                </View>
                <View style={styles.information}>
                <Pressable    style={styles.information} >
                       
                           
                    <Text style={styles.informationKeyword}>성분 찾기</Text>
                                <Icon name="chevron-right" size={45} style={{marginRight:20}}></Icon>
                              
                           
                            </Pressable>
                        </View>
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
                    <View style={styles.row3}>
                        <CustomButton theme="gender" title="취소" onPress={() => {
                            
                            navigation.navigate("MainPage")
                            
                        }}/>
                        <CustomButton theme="gender" title="확인" color="red" onPress={() => { navigation.navigate("MainPage") }}/>
                    </View>
                    <View style={{ height: top }}></View>
                </View>
                </ScrollView>
        )
    }
    
    if(!cameraReport)
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
        marginBottom:10,
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
        width:"90%"
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
    main1: {
        flex: 1,
       
    },
    mainImage: {
        height:400,
        marginHorizontal: 20,
        borderTopColor:"gray",
        borderBottomColor:"gray",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        
        alignItems: "center",
        justifyContent:"center",
    },
    cosmetic: {
        width: 150,
        height: 150,
        borderRadius:75,
    },
    information: {
        flexDirection: "row",
        marginVertical: 13,
        justifyContent: "space-between",
        alignItems:"center",
        marginLeft:10,
        width:"100%",
      
    },
    informationKeyword: {

        fontSize: 20,
        fontWeight: "500",
    },
    informationKeyword1: {
        marginLeft:20,
         fontSize: 20,
         fontWeight: "500",
     },
    informationSubKeyword: {
        marginVertical: 7,
        fontSize: 15,
        fontWeight: "300",
    },
    

})

export default MainReport