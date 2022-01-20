

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  Dimensions,
  Pressable,
} from "react-native";

import Icon from 'react-native-vector-icons/EvilIcons'


export default function ShopList() {
    const [skin,setSkin] = useState(false)
    const renderGame = ({ item }) => (
      <>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop:15,
      }}
    >

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={{ uri: item.src }} style={styles.tinyImage} />
        </View>
        <View style={{ width: 60,alignItems:"flex-start",paddingLeft:10, }}>
            <Text style={{ width:260,fontSize:15, }}>{item.game} </Text>
            <Text style={{ width:260,fontSize:20, }}>{item.text} </Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between",width:220,paddingTop:15 }}>
                  <Text style={{ textAlign: "center" }}>{item.people} </Text>
                  <Icon name="heart" size={30} />
              </View>  
           
          </View>
          
      </View>
            <View style={{ height: 10, borderBottomWidth: 0.3, width: "100%" }}></View>
            </>
  );
  return (
      <SafeAreaView>
          <View style={{marginTop:20}}>
              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <Pressable onPress={() => setSkin(!skin)} style={{ flexDirection: "row", alignItems: "center" }}>
                      <Text style={{fontSize:15,marginLeft:20}}>스킨케어</Text> 
                          <Icon name="chevron-down" size={30} /> 
                          </Pressable>
                      <Text style={{fontSize:15,marginLeft:10}}>헤어케어</Text> 
                      <Icon name="chevron-down" size={30}/>   
                  </View>
                  <View style={{justifyContent:"center",alignItems:"center",marginRight:20}}>
                 <Text style={{fontSize:15}}>가격순</Text>
                 </View>
             
              </View>
      
          </View>
          {
              skin? <View style={styles.lowButton1}>
              <Text style={styles.fontSize}>스킨·토너</Text>     
              <Text style={styles.fontSize}>로션·에멀젼</Text>     
              <Text style={styles.fontSize}>에센스·세럼·미스트</Text>     
              <Text style={styles.fontSize}>크림·페이스오일</Text>     
              <Text style={styles.fontSize}>클렌저</Text>     
              <Text style={styles.fontSize}>립케어</Text>     
             </View> : <View></View>
        }
      
      <FlatList
       
        data={hotGame}
        renderItem={renderGame}
        keyExtractor={(game) => game.id}
        style={{ margin: 20 }}

      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    fontSize: {
        fontSize: 20,
        marginVertical:10,
        paddingLeft: 10,
        color:"gray"
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tinyImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
    },
    lowButton1: {
        height:280,
        backgroundColor:"white",
        marginHorizontal:20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0.15,
     
    
        marginVertical: 10,
    },
});

const hotGame = [
  {
    id: "1",
    game: "VDL",
    text: "틴트바 트리플샷",
    people: "15,000원",
    src:
    "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
  },
  {
    id: "2",
    game: "VDL",
    text: "틴트바 트리플샷",
    people: "15,000원",
    src:
    "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
  },
    {
        id: "3",
        game: "VDL",
        text: "틴트바 트리플샷",
        people: "15,000원",
        src: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    },
  {
    id: "4",
    game: "VDL",
    text: "틴트바 트리플샷",
    people: "15,000원",
    src:"https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
  },
  {
    id: "5",
    game: "VDL",
    text: "틴트바 트리플샷",
    people: "15,000원",
    src:
    "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    },
    {
        id: "6",
        game: "VDL",
        text: "틴트바 트리플샷",
        people: "15,000원",
        src:
        "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    },
    {
        id: "7",
        game: "VDL",
        text: "틴트바 트리플샷",
        people: "15,000원",
        src:
        "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      },
 
];