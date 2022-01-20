import React from 'react'
import { Text, View, StyleSheet,Pressable, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSkin from './MainSkin'
import ShopCarousel from '../Carousel/Carousel'
import Icon from 'react-native-vector-icons/EvilIcons'
const SkinReport = ({navigation}) => {
    const {top} = useSafeAreaInsets();
    return (
        <ScrollView style={{ flex: 1 }}>
        <View >
              <View style={{ height: top }}></View>
        
             
              <Pressable >
            <View style={styles.lowButton}>
                   
                        <Text>1월 9일 화요일</Text>
                        <Text style={{fontSize:20}}>70점</Text>
                   
            </View>
                </Pressable>
                <Pressable >
            <View style={styles.lowButton}>
                   
                        <Text>1월 9일 화요일</Text>
                        <Text style={{fontSize:20}}>70점</Text>
                   
            </View>
                </Pressable>
                <Pressable >
            <View style={styles.lowButton}>
                   
                        <Text>1월 9일 화요일</Text>
                        <Text style={{fontSize:20}}>70점</Text>
                   
            </View>
                </Pressable>
                <Pressable >
            <View style={styles.lowButton}>
                   
                        <Text>1월 9일 화요일</Text>
                        <Text style={{fontSize:20}}>70점</Text>
                   
            </View>
                </Pressable>
                
                <Pressable >
            <View style={styles.lowButton}>
                   
                        <Text>1월 9일 화요일</Text>
                        <Text style={{fontSize:20}}>70점</Text>
                   
            </View>
            </Pressable>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    lowButton: {
        flexDirection:"row",
        height:70,
        backgroundColor:"white",
        marginHorizontal:20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "white",
        paddingHorizontal: 25,
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
export default SkinReport
