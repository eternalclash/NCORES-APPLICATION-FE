import React from 'react'
import { Text, View, StyleSheet,Pressable, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSkin from './MainSkin'
import ShopCarousel from '../Carousel/Carousel'
import Icon from 'react-native-vector-icons/EvilIcons'
const MainSkinPage = ({navigation}) => {
    const {top} = useSafeAreaInsets();
    return (
        <ScrollView style={{ flex: 1 }}>
        <View >
              <View style={{ height: top }}></View>
            <Text style={{fontSize:30,marginTop:10,marginLeft:10,}}>플라럽스로 기록한지</Text>
            <Text style={{ fontSize: 30,marginTop:10,marginLeft:10, }}>6일째</Text>
                <Pressable onPress={()=>navigation.navigate("SkinReport")}>
                <MainSkin />
                </Pressable>
              
                <View style={{ flexDirection: "row",justifyContent:"space-around" }}>
                    <Text>12월 29일</Text>  
                    <Text>1월 1일</Text>
                    <Text>1월 3일</Text>
                    <Text>1월 5일</Text>
                    <Text>1월 9일</Text>
                </View>
              
            <View style={styles.lowButton}>
                    <Pressable>
                        <Text>지난주 보다 피부 점수가</Text>
                        <Text  style={styles.fontSize}>20점 상승했어요</Text>
                    </Pressable>
            </View>
            <View style={styles.lowButton}>
                    <Pressable>
                        <Text>어제보다 민감한 피부가</Text>
                        <Text  style={styles.fontSize}>개선되었어요</Text>
                    </Pressable>
            </View>
            <View style={styles.lowButton1}>
                    <Pressable>
                        <Text>오늘의 피부 기록 하기</Text>
                       
                    </Pressable>
                </View>
                <View style={styles.information}>
                <Text style={styles.informationKeyword}>나에게 맞는 제품 찾기</Text>
                <Icon name="chevron-right" size={45}></Icon>
            </View>
                <ShopCarousel />
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
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    lowButton: {
        height:70,
        backgroundColor:"white",
        marginHorizontal:20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "white",
        paddingLeft: 25,
        marginVertical: 10,
    },
    lowButton2: {
        height:90,
        backgroundColor:"white",
        marginHorizontal:20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "white",
        marginVertical: 10,
    },
    lowButton1: {
        height:50,
        backgroundColor:"white",
        marginHorizontal:20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "white",
    
        marginVertical: 10,
    },
    information: {
        flexDirection: "row",
        marginVertical: 13,
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
