import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet,Pressable, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSkin from './MainSkin'
import ShopCarousel from '../Carousel/Carousel'
import Icon from 'react-native-vector-icons/EvilIcons'
import { StackedBarChart } from 'react-native-svg-charts'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as cosmeticsAction } from '../../redux/modules/cosmetics'
import { actionCreators as skinAction } from '../../redux/modules/skin'
import SimpleCarousel from '../Carousel/SimpleCarousel'
const MainSkinPage = ({navigation}) => {
    const { top } = useSafeAreaInsets();
    const dispatch = useDispatch()
    const colors = ['#EFC2C2', '#C14242','gray','lightgray']
    const keys = ['apples', 'banana','orange','peach']
    const data = [
        {
      
            "apples": 70,
            "banana":30,
            "orange": 40,
            "peach":50,
        },
      
    ]
    const simpleCos = useSelector(state => state.cosmetics.simple)
    const getList = useSelector(state => state.skin.getList)
    const getBouman = useSelector(state => state.skin.getBouman)
    //바우만 별 셀렉터
    const aquaScore = useSelector(state => state.skin.aquaScore)
    const oillScore = useSelector(state => state.skin.oillScore)
    const pigmentScore = useSelector(state => state.skin.pigmentScore)
    const winkleScore = useSelector(state => state.skin.winkleScore)
    const sensitiveScore = useSelector(state => state.skin.sensitiveScore)

  
    useEffect(() => {
        dispatch(cosmeticsAction.simpleCosmeticAPI())
        dispatch(skinAction.getListAPI())

    }, [])
    useEffect(() => {
       
        dispatch(skinAction.getBoumanAPI())
    }, [])
    console.log(getBouman)
   
   console.log(aquaScore)

   if(aquaScore.data&&oillScore.data&&pigmentScore.data&&winkleScore.data&&sensitiveScore.data)
    return (
        <ScrollView style={{ flex: 1 }}>
            <View  >
            <View style={{backgroundColor:"#F5EBE8"}}>
                <View style={{ height: top }}></View>
                <View style={styles.row1}>
                    <Text style={styles.profileText1}>피부 점수</Text>
                    <Text style={styles.profileText2}>추천화장품</Text>
                    </View> 
                <View style={{width:"100%",borderBottomWidth:1,}}></View>    
                <Text style={{fontSize:18,marginTop:30,marginLeft:10,fontWeight:"500",lineHeight:22,}}>최근 측정한 피부 점수의</Text>
            <Text style={{ fontSize:18,marginTop:3,marginLeft:10,fontWeight:"500" }}>평균은 60점이었어요</Text>
             
                <MainSkin />
              
              
                <View style={{ flexDirection: "row",justifyContent:"space-around" }}>
                    <Text>1일 전</Text>  
                    <Text>5일 전</Text>
                    <Text>1주 전</Text>
                    <Text>2주 전</Text>
                    <Text>2주 전</Text>
                    <Text>2달 전</Text>
                    <Text>3달 전</Text>
                </View>
              
         
            <View style={styles.lowButton1}>
                    <Pressable>
                        <Text>오늘의 피부 진단 하기</Text>
                       
                    </Pressable>
                    </View>
                    <View style={styles.chart}> 
                            <View style={styles.filter2}>
                            <Text style={styles.filter2}>주름성</Text>
                            </View>
                         
                            <View style={styles.filter1}>
                            <Text style={styles.filter}>주름성</Text> 
                                <Text >100</Text>      
                        </View>
                            
                            
                                   
                            <StackedBarChart
                style={{ height: 20,borderRadius:2,marginTop:10 }}
                keys={winkleScore.keys}
                colors={winkleScore.color}
                data={winkleScore.data}
                showGrid={false}
                            
                                horizontal="true"
                        />    
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"#EFC2C2",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>일주일 전엔 40점이었어요</Text>
                        </View>
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"#C14242",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>한달 전엔 60점이었어요</Text>
                        </View>
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"gray",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>이번 주엔 90점이었어요</Text>
                        </View>
                     
                    </View>
                    
                    <View style={styles.chart}> 
                            <View style={styles.filter2}>
                            <Text style={styles.filter2}>민감</Text>
                            </View>
                         
                            <View style={styles.filter1}>
                            <Text style={styles.filter}>수분</Text> 
                                <Text >100</Text>      
                        </View>
                            
                            
                                   
                            <StackedBarChart
                style={{ height: 20,borderRadius:2,marginTop:10 }}
                keys={sensitiveScore.keys}
                colors={sensitiveScore.color}
                data={sensitiveScore.data}
                showGrid={false}
                            
                                horizontal="true"
                        />    
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"#EFC2C2",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>일주일 전엔 40점이었어요</Text>
                        </View>
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"#C14242",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>한달 전엔 60점이었어요</Text>
                        </View>
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"gray",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>이번 주엔 90점이었어요</Text>
                        </View>
                     
                    </View>
                    

          

                <View style={styles.chart}> 
                            <View style={styles.filter2}>
                            <Text style={styles.filter2}>색소성</Text>
                            </View>
                         
                            <View style={styles.filter1}>
                            <Text style={styles.filter}>수분</Text> 
                                <Text >100</Text>      
                        </View>
                            
                            
                                   
                            <StackedBarChart
                style={{ height: 20,borderRadius:2,marginTop:10 }}
                keys={pigmentScore.keys}
                colors={pigmentScore.color}
                data={pigmentScore.data}
                showGrid={false}
                            
                                horizontal="true"
                        />    
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"#EFC2C2",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>일주일 전엔 40점이었어요</Text>
                        </View>
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"#C14242",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>한달 전엔 60점이었어요</Text>
                        </View>
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"gray",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>이번 주엔 90점이었어요</Text>
                        </View>
                     
                </View>
                
                <View style={styles.chart}> 
                            <View style={styles.filter2}>
                            <Text style={styles.filter2}>수분</Text>
                            </View>
                         
                            <View style={styles.filter1}>
                            <Text style={styles.filter}>수분</Text> 
                                <Text >100</Text>      
                        </View>
                            
                            
                                   
                            <StackedBarChart
                style={{ height: 20,borderRadius:2,marginTop:10 }}
                keys={aquaScore.keys}
                colors={aquaScore.color}
                data={aquaScore.data}
                showGrid={false}
                            
                                horizontal="true"
                        />    
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"#EFC2C2",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>일주일 전엔 40점이었어요</Text>
                        </View>
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"#C14242",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>한달 전엔 60점이었어요</Text>
                        </View>
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"gray",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>이번 주엔 90점이었어요</Text>
                        </View>
                     
                </View>
                
                <View style={styles.chart}> 
                            <View style={styles.filter2}>
                            <Text style={styles.filter2}>유분</Text>
                            </View>
                         
                            <View style={styles.filter1}>
                            <Text style={styles.filter}>유분</Text> 
                                <Text >100</Text>      
                        </View>
                            
                            
                                   
                            <StackedBarChart
                style={{ height: 20,borderRadius:2,marginTop:10 }}
                keys={oillScore.keys}
                colors={oillScore.color}
                data={oillScore.data}
                showGrid={false}
                            
                                horizontal="true"
                        />    
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"#EFC2C2",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>일주일 전엔 40점이었어요</Text>
                        </View>
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"#C14242",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>한달 전엔 60점이었어요</Text>
                        </View>
                <View style={styles.row2}>
                <View style={{width:20,height:20,backgroundColor:"gray",borderRadius:10}}></View>            
                <Text style={{fontSize:15,marginLeft:10}}>이번 주엔 90점이었어요</Text>
                        </View>
                     
                </View>
                
           <Pressable onPress={()=>navigation.navigate("ShopList") } >
                    <View style={styles.information}>
                       
                <Text style={styles.informationKeyword}>나에게 맞는 제품 찾기</Text>
                            <Icon name="chevron-right" size={45}></Icon>
                          
                        </View>
                        </Pressable>
                <SimpleCarousel simpleCos={simpleCos} />
                <View style={styles.information}>
                <Text style={styles.informationKeyword}>헤어 제품 찾기</Text>
                <Icon name="chevron-right" size={45}></Icon>
            </View>
            <View style={styles.lowButton2}>
                    <Pressable onPress={()=>navigation.navigate("HairCheck")}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text>길동님을 위한</Text>
                        <Text style={styles.fontSize}>헤어 제품을 찾아드릴게요</Text>
                            <View style={{ width: 100, height: 33, borderWidth:1,borderRadius:30,justifyContent:'center',alignItems:'center'}}><Text>퀴즈 풀기</Text></View>
                        </View>
                        
                    </Pressable>
                    </View>
                    <View style={{height:30}}>

</View>
                    </View>
            </View>

        </ScrollView>
    )
   else {
       return (
           <></>
       )
   }
}
const styles = StyleSheet.create({
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
    row1: {
        flexDirection: 'row',
        alignItems:"center",
        
    },
    row2: {
        marginTop:10,
        flexDirection: 'row',
        alignItems:"center",
        
    },
    profileText1: {
        fontSize: 18,
        marginTop: 20,
        marginBottom:10,
        marginHorizontal: 10,
        fontWeight:"500"
    },
    profileText2: {
        fontSize: 18,
        marginTop: 20,
        marginBottom:10,
        marginHorizontal: 10,
        fontWeight:"200"
    },
    lowButton1: {
        height:56,
        backgroundColor:"#F5EBE8",
        marginHorizontal:20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
      
    
        marginTop: 60,
        marginBottom:36,
    },
    
    information: {
        flexDirection: "row",
        marginVertical: 25,
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
export default MainSkinPage
