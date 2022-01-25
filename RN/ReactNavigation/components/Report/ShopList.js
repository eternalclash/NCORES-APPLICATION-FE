

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  Dimensions,
  Pressable,
  Linking,
} from "react-native";
import { useDispatch,useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/EvilIcons'
import { actionCreators as cosActions } from "../../redux/modules/cosmetics";
import { actionCreators as markActions } from "../../redux/modules/mark";
export default function ShopList() {
  const [skin, setSkin] = useState(false)
  const detail = useSelector(state=>state.cosmetics.detail)
  const category = useSelector(state => state.cosmetics.category)
  const markCheck = useSelector(state=>state.mark.markCheck)
  const [detailcos,setDetail] = useState()
  const dispatch = useDispatch();
  const markHandler = (e) => {
    e.likecheck= !e.likeCheck
  }
  useEffect(() => {
    dispatch(cosActions.categoryAllAPI())

  }, [])
  useEffect(() => {
    dispatch(cosActions.categoryCosmeticAPI())
     setDetail(detail)
  }, [markCheck])
  console.log(detailcos)
    const renderGame = ({ item }) => (
        <View  nestedScrollEnabled >
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
            </View>
  );
  return (
      <ScrollView nestedScrollEnabled style={{backgroundColor:"#FEFEFE"}}> 
          <View style={{marginTop:20}}>
              <View style={{flexDirection:"row", justifyContent:"space-between" ,marginHorizontal:5}}>
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
        skin ? <ScrollView  nestedScrollEnabled  style={styles.lowButton1}>
          {
 category.map((e, index) => {
  if(index<15)
  return   <Pressable onPress={()=>{dispatch(cosActions.detailCosmeticAPI(e.id))}}>
    <Text style={styles.fontSize}>{e.name}</Text>        
 </Pressable>
})    
          }
        </ScrollView>
               : <View></View>
        }
       
      {detail?detail.map((e, index) => {
          if(index<15)
            return <View style={{ marginHorizontal: 20 }} nestedScrollEnabled >
            <Pressable onPress={()=>Linking.openURL(e.naverUrl)}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop:15,
            }}
          >
      
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={{ uri: e.img }} style={styles.tinyImage} />
              </View>
              <View style={{ width: 60,alignItems:"flex-start",paddingLeft:10,paddingTop:10 }}>
                  <Text style={{ width:260,fontSize:15, }}>{e.brand} </Text>
                  <Text style={{ width:260,fontSize:15, }}>{e.name} </Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between",width:260,paddingTop:10}}>
                      <Text style={{ textAlign: "center" }}>{e.price} </Text>
                      {
                        e.likeCheck ?
                        <Pressable onPress={() => dispatch(markActions.markCosmeticAPI(e.id,e.categoryId))}>
                        <Image source={require('../../image/true.png')}   style={{width:28,height:28,marginBottom:10}} resizeMode="stretch"/>
                        </Pressable>  
                          :<Pressable onPress={() => dispatch(markActions.markCosmeticAPI(e.id,e.categoryId))}>
                        <Image source={require('../../image/false.png')}   style={{width:28,height:28,marginBottom:10}} resizeMode="stretch"/>
                        </Pressable>  
                      }
                         

                    </View>  
                 
                </View>
                
            </View>
                <View style={{ height: 10, borderBottomWidth: 0.3, width: "100%", opacity: 0.4 }}></View>
                </Pressable>
                  </View>
      })   
        :
        <></>
     }


      {/* <FlatList
       
        data={hotGame}
        renderItem={renderGame}
        keyExtractor={(game) => game.id}
        style={{ margin: 20 }}
        nestedScrollEnabled 
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    fontSize: {
        fontSize: 15,
        marginVertical:10,
        paddingLeft: 10,
        color: '#323632'
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
        height:262,
        backgroundColor:"white",
        marginHorizontal:20,

        borderRadius: 10,
        borderWidth: 0.15,
     
    
        marginVertical: 10,
    },
});

