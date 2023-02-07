
   
   
/**
 * Sample BLE React Native App
 *
 * @format
 * @flow strict-local
 */

 import React, {
  useState,
  useEffect,
} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeModules,
  NativeEventEmitter,
  Button,
  Image,
  Platform,
  PermissionsAndroid,
  FlatList,
  TouchableHighlight,
  Pressable,
  ImageBackground,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import CustomButton from './CustomButton';
import BleManager from '../BleManager';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { is } from 'immer/dist/internal';
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
function ASC(value) {
  console.log("아스키코드", value.split(':')[1].split(',')[0])
  console.log("시간", value.split(':')[2].split(' ')[0])
  console.log("모드", value.split(":")[3].split(',')[0])
  console.log("단계", value.split(":")[4].split(" ")[0])
}

const BlueTooth = () => {
  const [isScanning, setIsScanning] = useState(false);
  const peripherals = new Map();
  const [list, setList] = useState([]);
  const [connect, setConnect] = useState();
  
  const [working, setWorking] = useState();
  const [time, setTime] = useState(1);
  const [mode, setMode] = useState();
  const [level, setLevel] = useState();
  
  console.log(working,time,mode,level)
  // useEffect(() => {
  //   setInterval(() => {
  //    setTime(time+1)
  //   }, 1000);

  // }, [time]);

  const startScan = () => {
    if (!isScanning) {
      BleManager.scan([], 3, true).then((results) => {
        console.log('Scanning...');
        setIsScanning(true);
      }).catch(err => {
        console.error(err);
      });
    }    
  }

  const handleStopScan = () => {
    console.log('Scan is stopped');
    setIsScanning(false);
  }

  const handleDisconnectedPeripheral = (data) => {
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      setList(Array.from(peripherals.values()));
    }
    console.log('Disconnected from ' + data.peripheral);
  }

  const handleUpdateValueForCharacteristic = () => {
    console.log('변화중')
    console.log('Received data from ' + data.peripheral + ' characteristic ' + data.characteristic, data.value);
  }

  const retrieveConnected = () => {
    BleManager.getConnectedPeripherals([]).then((results) => {
      if (results.length == 0) {
        console.log('No connected peripherals')
      }
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i];
        peripheral.connected = true;
        peripherals.set(peripheral.id, peripheral);
        setList(Array.from(peripherals.values()));
      }
    });
  }

  const handleDiscoverPeripheral = (peripheral) => {
    console.log('Got ble peripheral', peripheral);
    if (peripheral.name == 'PLALUVS') 
    {
      peripherals.set(peripheral.id, peripheral);
      setList(Array.from(peripherals.values()));
      }
   
  }

  const testPeripheral =  async (peripheral) => {
    if (peripheral){
       {
     await BleManager.disconnect(peripheral.id)
      await  BleManager.connect(peripheral.id).then(async() => {
      
         await   BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
          
              const k =peripheralData.characteristics[0].value.bytes.map((e, index) => { return String.fromCharCode(e) }).join("")
                console.log(k)
              if (k.split(",")[1].split(":")[0] == "Level")
                  setWorking(stopped)
              
              if (k.split(":")[1].split(",")[0])
              {
                if (k.split(":")[1].split(",")[0] == "working")
                {
                  setWorking("동작")
                  setMode(k.split(":")[3].split(",")[0])
                  setLevel(k.split(":")[4].split(" ")[0])
           
                    }
                     
                else if (k.split(":")[1].split(",")[0] == "charging")
                {
                  setWorking("충전 중")
                  setMode(k.split(":")[3].split(",")[0])
                  setLevel(k.split(":")[4].split(" ")[0])
           
                  }
                      
                  else {
                  setWorking("정지")       
                  setMode(k.split(":")[3].split(",")[0])
                  setLevel(0)
                  setTime(0)
                  }
                 //나머지 처리
                //  setTime(Number(k.split(":")[2].split(",")[0].split(" ")[0]))
                
                  }
              
              // console.log(k.split(":")[1].split(",")[0])  //working
              // console.log(Number(k.split(":")[2].split(",")[0].split(" ")[0]))  // 0020,20
              // console.log(k.split(":")[3].split(",")[0]) //Face
              // console.log(k.split(":")[4].split(" ")[0])
              BleManager.readRSSI(peripheral.id).then((rssi) => {
             
                let p = peripherals.get(peripheral.id);
                if (p) {
                  p.rssi = rssi;
                  peripherals.set(peripheral.id, p);
                  setList(Array.from(peripherals.values()));
                }                
              });                                          
            });

        }).catch((error) => {
          console.log('Connection error', error);
        });
      }
    }

  }

  useEffect(() => {
    BleManager.start({showAlert: false});

    bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral);
    bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan );
    bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', handleDisconnectedPeripheral );
   

    
 
  },[]);
  useEffect(
    () => {
      bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic',  ( peripheral) => {
        console.log(peripheral,"퍼리프랄")
       
      },
    ); 
    },
  )
  const renderItem = (item) => {
    const color = item.connected ? 'green' : '#fff';
    return (
      <TouchableHighlight onPress={() =>
      {
        let count = 0;
        setConnect(true)
        setInterval(() => {
          count = count + 2;
          if (working =="정지")
          {
            setTime(0)
            count = 0;
           }
           else
            setTime(count)
          testPeripheral(item)
        }, 2000)
        }
      
        
       }>
        <View style={{ borderWidth: 0.7, backgroundColor: color, height: 80, justifyContent: 'center', alignItems:'center',width:'90%',marginLeft:20}}>
          <Text style={{fontSize: 15, textAlign: 'center', color: '#333333', padding: 10}}>{item.name}</Text>
         
        </View>
      </TouchableHighlight>
    );
  }
  if(connect)
  return (
    <>
      <SafeAreaView style={{backgroundColor:"white"}}>
     
          
          <View >
            
        
          <View >
          <ImageBackground style={{height:200}} source={require('../image/blueToothTag.png')} resizeMode='cover'>
            <View style={{ justifyContent:'center',alignItems:'center',paddingTop:120}}>
            <Image source={require('../image/text.png')} style={{width:98.45,height:14,}}></Image>
          <Text style={{textAlign:'center',fontSize:22,marginTop:15}}>플라럽스로 시작하는</Text>
                <Text style={{ textAlign: 'center', fontSize:22}}>마법과 같은 변화</Text>
             </View>
             </ImageBackground>
           </View>
       
          <View style={{ flexDirection: "row",justifyContent:'center',alignItems:'center',marginTop:50,marginHorizontal:30 }}>
            <Pressable style={{ width: "50%", borderWidth: 0.7, height: 100, borderRadius: 4, borderColor: "gba(153, 153, 153, 0.5)",justifyContent:'center',alignItems:'center',marginRight:20}}>
              <Image source={require("../image/Alarm2.png")} style={{ width: 25, height: 25 }} resizeMode='cover'></Image>   
              <Text style={{ marginTop: 5 }}>{time ? time+"초" : "00초"}</Text>
          </Pressable>
            <Pressable style={{ width: "50%", borderWidth: 0.7, height: 100, borderRadius: 4, borderColor: "gba(153, 153, 153, 0.5)",justifyContent:'center',alignItems:'center' }} >
            <Image source={require("../image/stop.png")} style={{ width: 16, height: 25 }} resizeMode='cover'></Image>   
              <Text style={{ marginTop: 5 }}>{ working? working: "정지"}</Text>
            </Pressable>

          </View>
          <View style={{ backgroundColor:"rgba(240, 223, 222, 0.5)", height:220,borderWidth:0.7,marginHorizontal:20,marginTop:50,borderRadius:4,justifyContent:"center",alignItems:"center"}}>
            <View style={{position:"absolute",top:10,right:10,}}><Text style={{fontSize:15}}>{mode=="Face"&&"페이스모드",mode=="Scalp"&&"스컬프모드"}</Text></View>
            <Text style={{ fontSize: 20 }}>플라럽스가</Text>
            <Text style={{fontSize:20}}>피부를 관리중이에요</Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              {
                level=="Low"?   <View style={{color:"white",backgroundColor:"black", width: 45, height: 45, borderRadius: 30, borderWidth: 0.7, justifyContent: "center", alignItems: "center",marginRight:10 }}>
                <Text style={{fontSize:14,color:"white"}}>약</Text>
                </View>
                  :
                  <View style={{ width: 45, height: 45, borderRadius: 30, borderWidth: 0.7, justifyContent: "center", alignItems: "center",marginRight:10 }}>
                  <Text style={{fontSize:14}}>약</Text>
                </View>
              }
              {
                level=="Middle"?   <View style={{backgroundColor:"black", width: 45, height: 45, borderRadius: 30, borderWidth: 0.7, justifyContent: "center", alignItems: "center",marginRight:10 }}>
                <Text style={{fontSize:14,color:"white"}}>중</Text>
                </View>
                  :
                  <View style={{ width: 45, height: 45, borderRadius: 30, borderWidth: 0.7, justifyContent: "center", alignItems: "center",marginRight:10 }}>
                  <Text style={{fontSize:14}}>중</Text>
                </View>
              }
              {
                level=="High"?   <View style={{color:"white",backgroundColor:"black", width: 45, height: 45, borderRadius: 30, borderWidth: 0.7, justifyContent: "center", alignItems: "center",marginRight:10 }}>
                <Text style={{fontSize:14,color:"white"}}>강</Text>
                </View>
                  :
                  <View style={{ width: 45, height: 45, borderRadius: 30, borderWidth: 0.7, justifyContent: "center", alignItems: "center",marginRight:10 }}>
                  <Text style={{fontSize:14}}>강</Text>
                </View>
              }
           
              
            </View>
          </View>

          
          
          </View>              
      
       
      </SafeAreaView>
     
    </>
  );
  else {
    return (
      <View style={{backgroundColor:"white",flex:1}}> 
        <SafeAreaView  style={{backgroundColor:"white"}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            
            <View style={styles.body}>
              
             
  
           
  
              {(list.length == 0) && !isScanning &&
                <View style={{flex:1, margin: 20}}>
                  <Text style={{ textAlign: 'center', fontSize: 15 }}>플라럽스 기기를 연결해봅시다</Text>
                 
                  <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../image/dot.png')} style={{width:10,height:10,marginTop:20,marginRight:10, }}/>
                    <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 20 }}>핸드폰의 블루투스를 켰나요?</Text>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../image/dot.png')} style={{width:10,height:10,marginTop:10,marginRight:10,marginLeft:4 }}/>
                    <Text style={{textAlign: 'center',fontSize:15,marginTop:10}}>플라럽스 기기가 켜져 있나요?</Text>
                  </View>
    
     
                </View>
              }
            
            </View>              
          </ScrollView>
          <FlatList
              data={list}
              renderItem={({ item }) => renderItem(item) }
              keyExtractor={item => item.id}
          />  
         
        </SafeAreaView>
        <Image source={require('../image/bluetooth.png')} style={{ width: 375, height: 202, position: "absolute", bottom: 80,zIndex:-1 }} resizeMode='stretch' />
        <Pressable  onPress={() => startScan() } style={{position:"absolute", bottom:40,width:'90%', marginHorizontal:20,height:56,backgroundColor:"black",justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <View > 
            <Text style={{color:"white",fontSize:15}}>플라럽스 기기 찾기</Text>
          </View>
        </Pressable>     
      </View>
    );
  }
 
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
 
  body: {
     marginTop:60,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "white",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "white",
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


export default BlueTooth;