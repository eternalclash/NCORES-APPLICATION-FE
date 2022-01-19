import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Pressable, ScrollView } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/EvilIcons'
import { StackedBarChart } from 'react-native-svg-charts'
import CustomButton from '../CustomButton'
const MainReport = ({ navigation }) => {
    const { top } = useSafeAreaInsets()
    const data = [
        {
            month: new Date(2015, 0, 1),
            apples: 700,
            bananas: 1000,
            cherries: 960,
            dates: 400,
            oranges: 400,
        },
        // {
        //     month: new Date(2015, 1, 1),
        //     apples: 700,
        //     bananas: 1000,
        //     cherries: 960,
        //     dates: 400,
        // },
        // {
        //     month: new Date(2015, 2, 1),
        //     apples: 700,
        //     bananas: 1000,
        //     cherries: 3640,
        //     dates: 400,
        // },
        // {
        //     month: new Date(2015, 3, 1),
        //     apples: 700,
        //     bananas: 1000,
        //     cherries: 640,
        //     dates: 400,
        // },
    ]
    const colors = ['black', 'lightgray']
    const keys = ['apples','bananas']

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.main}>
            <View style={{ height: top }}></View>
            <View style={styles.main1}>
         
              
                <View style={styles.row1}>
                    <Text style={styles.profileText1}>진단 결과</Text>
                    <Text style={styles.profileText1}>성분 추천</Text>
                </View>
           
                <View style={styles.mainImage}>
                
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"}}
                style={styles.cosmetic}
                resizeMode="cover"
                    />
                    <Text style={styles.profileText2}>오늘의 피부점수</Text>
                    <Text style={styles.profileText}>87점</Text>
                    <Text style={styles.profileText3}>수분이 부족한 중/복합성 피부네요. 피부에 수분이 부족한 탓에 색소침착이 있네요. 다행히 피부가 저항성을 갖고 있어 외부 환경에 아주 민감 하진 않아요.그래도 주름과 색소침착을 예방하기 위해 자외선은 각별히 신경을 써주셔야해요.외출 시에는 꼭! 자외선 차단제를 자주 덧 발라주세요</Text>
                </View>
            <View style={styles.main}>
             
                            
                        <View style={styles.chart}> 
                            <View style={styles.filter2}>
                            <Text style={styles.filter2}>촉촉해요</Text>
                            </View>
                         
                            <View style={styles.filter1}>
                            <Text style={styles.filter}>수분</Text> 
                        <Text >40점</Text>      
                        </View>
                            
                            
                                   
                            <StackedBarChart
                style={{ height: 80 }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                                contentInset={{ top: 30, bottom: 30 }}
                                horizontal="true"
                            />          
                     
            </View>
                    
            <View style={styles.chart}> 
                            <View style={styles.filter2}>
                            <Text style={styles.filter2}>촉촉해요</Text>
                            </View>
                         
                            <View style={styles.filter1}>
                            <Text style={styles.filter}>수분</Text> 
                        <Text >40점</Text>      
                        </View>
                            
                            
                                   
                            <StackedBarChart
                style={{ height: 80 }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                                contentInset={{ top: 30, bottom: 30 }}
                                horizontal="true"
                            />          
                     
                        </View>
                        <View style={styles.chart}> 
                            <View style={styles.filter2}>
                            <Text style={styles.filter2}>촉촉해요</Text>
                            </View>
                         
                            <View style={styles.filter1}>
                            <Text style={styles.filter}>수분</Text> 
                        <Text >40점</Text>      
                        </View>
                            
                            
                                   
                            <StackedBarChart
                style={{ height: 80 }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                                contentInset={{ top: 30, bottom: 30 }}
                                horizontal="true"
                            />          
                     
                        </View>
                        <View style={styles.chart}> 
                            <View style={styles.filter2}>
                            <Text style={styles.filter2}>촉촉해요</Text>
                            </View>
                         
                            <View style={styles.filter1}>
                            <Text style={styles.filter}>수분</Text> 
                        <Text >40점</Text>      
                        </View>
                            
                            
                                   
                            <StackedBarChart
                style={{ height: 80 }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                                contentInset={{ top: 30, bottom: 30 }}
                                horizontal="true"
                            />          
                     
            </View>
            <View style={styles.information}>
                <Text style={styles.informationKeyword}>성분 추천</Text>
                    </View>
                    
            <View style={styles.information}>
                        <View style={styles.row}>
                        <View style={styles.circle}></View>
                        <Text style={styles.informationKeyword1}>호호바오일</Text>    
                    </View>
               
                        <Icon name="heart" size={30}> </Icon>
                    </View>
                    <View style={styles.information}>
                        <View style={styles.row}>
                        <View style={styles.circle}></View>
                        <Text style={styles.informationKeyword1}>호호바오일</Text>    
                    </View>
               
                        <Icon name="heart" size={30}> </Icon>
                    </View>
                    <View style={styles.information}>
                        <View style={styles.row}>
                        <View style={styles.circle}></View>
                        <Text style={styles.informationKeyword1}>호호바오일</Text>    
                    </View>
               
                        <Icon name="heart" size={30}> </Icon>
                        </View>
                        <View style={styles.information}>
                        <View style={styles.row}>
                        <View style={styles.circle}></View>
                        <Text style={styles.informationKeyword1}>호호바오일</Text>    
                    </View>
               
                        <Icon name="heart" size={30}> </Icon>
                       </View>
               
          
                </View>
                </View>
                <View style={styles.row3}>
                <CustomButton theme="gender" title="취소" onPress={()=>{navigation.navigate("MainPage")}}/>
                    <CustomButton theme="gender" title="기록하기" color="red" onPress={() => { navigation.navigate("MainPage") }}/>
                </View>
                <View style={{ height: top }}></View>
            </View>
            </ScrollView>
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
        backgroundColor:"gray",
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
        paddingLeft: 20,
      
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