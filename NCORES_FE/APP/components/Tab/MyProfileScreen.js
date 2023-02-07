import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Pressable } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import Icon from 'react-native-vector-icons/EvilIcons'

import ShopCarousel from '../Carousel/Carousel'
const MyProfileScreen = ({ navigation }) => {
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
                source={{ uri: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"}}
                style={styles.cosmetic}
                resizeMode="cover"
                    />
                    <Text style={styles.profileText}>홍길동님</Text>
                </View>
            <View style={styles.main}>
            <View style={styles.information}>
                <Text style={styles.informationKeyword}>내가 고른 성분</Text>
                      <Icon name="chevron-right" size={45}></Icon>
            </View>
            
            <ShopCarousel />
               
             <View style={styles.information}>
                <Text style={styles.informationKeyword}>내가 찜한 화장품</Text>
                <Icon name="chevron-right" size={45}></Icon>
            </View>
                <ShopCarousel />
                </View>
                </View>
            </View>
   
    )
}

const styles = StyleSheet.create({
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
 
    },
    main1: {
        flex: 1,
       
    },
    mainImage: {
        flex: 0.5,
        backgroundColor: "lightgray",
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

export default MyProfileScreen
