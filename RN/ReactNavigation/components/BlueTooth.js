
   
   
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
          let p = peripherals.get(peripheral.id);
          if (p) {
            p.connected = true;
            peripherals.set(peripheral.id, p);
            setList(Array.from(peripherals.values()));
          }
           
         await   BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
          
              const k =peripheralData.characteristics[0].value.bytes.map((e, index) => { return String.fromCharCode(e) })
              console.log( k.join(""));
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
        setInterval(() => {
          testPeripheral(item)   
        }, 2000)
        
       }>
        <View style={{ borderWidth: 0.7, backgroundColor: color, height: 80, justifyContent: 'center', alignItems:'center',width:'90%',marginLeft:20}}>
          <Text style={{fontSize: 15, textAlign: 'center', color: '#333333', padding: 10}}>{item.name}</Text>
         
        </View>
      </TouchableHighlight>
    );
  }
  
  return (
    <>
      <SafeAreaView>
     
          
          <View >
            
        
          <View >
          <ImageBackground style={{height:200}} source={require('../image/blueToothTag.png')} resizeMode='cover'>
            <View style={{ justifyContent:'center',alignItems:'center',paddingTop:120}}>
            <Image source={require('../image/text.png')} style={{width:98.45,height:14,}}></Image>
          <Text style={{textAlign:'center',fontSize:22,marginTop:35}}>플라럽스로 시작하는</Text>
                <Text style={{ textAlign: 'center', fontSize:22}}>마법과 같은 변화</Text>
             </View>
             </ImageBackground>
           </View>
       
          <View></View>

          
          
          </View>              
      
       
      </SafeAreaView>
     
    </>
  );
  // return (
  //   <>
  //     <SafeAreaView>
  //       <ScrollView
  //         contentInsetAdjustmentBehavior="automatic"
  //         style={styles.scrollView}>
          
  //         <View style={styles.body}>
            
           

         

  //           {(list.length == 0) &&
  //             <View style={{flex:1, margin: 20}}>
  //               <Text style={{ textAlign: 'center', fontSize: 15 }}>플라럽스 기기를 찾지 못했습니다.</Text>
               
  //               <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
  //                 <Image source={require('../image/dot.png')} style={{width:10,height:10,marginTop:20,marginRight:10, }}/>
  //                 <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 20 }}>핸드폰의 블루투스를 켰나요?</Text>
  //               </View>
  //               <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
  //                 <Image source={require('../image/dot.png')} style={{width:10,height:10,marginTop:10,marginRight:10,marginLeft:4 }}/>
  //                 <Text style={{textAlign: 'center',fontSize:15,marginTop:10}}>플라럽스 기기가 켜져 있나요?</Text>
  //               </View>
  
   
  //             </View>
  //           }
          
  //         </View>              
  //       </ScrollView>
  //       <FlatList
  //           data={list}
  //           renderItem={({ item }) => renderItem(item) }
  //           keyExtractor={item => item.id}
  //       />  
       
  //     </SafeAreaView>
  //     <Image source={require('../image/bluetooth.png')} style={{ width: 375, height: 202, position: "absolute", bottom: 80 }} resizeMode='stretch' />
  //     <Pressable  onPress={() => startScan() } style={{position:"absolute", bottom:40,width:'90%', marginHorizontal:20,height:56,backgroundColor:"black",justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
  //     <View > 
  //         <Text style={{color:"white",fontSize:15}}>플라럽스 기기 찾기</Text>
  //       </View>
  //     </Pressable>     
  //   </>
  // );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
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
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
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