
   
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
    Platform,
    PermissionsAndroid,
    FlatList,
    TouchableHighlight,
  } from 'react-native';
  
  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
  
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
  
  
    const startScan = () => {
      if (!isScanning) {
        BleManager.scan([], 10, true).then((results) => {
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
  
    const handleUpdateValueForCharacteristic = (data) => {
      console.log('Received data from ' + data.peripheral + ' characteristic ' + data.characteristic, data.value);
    }
  
    const retrieveConnected = () => {
      BleManager.getConnectedPeripherals([]).then((results) => {
        if (results.length == 0) {
          console.log('No connected peripherals')
        }
        // console.log("리트라이브 시발" ,results[0])
        // console.log(results[0].characteristics[0].value.bytes);
        const k =results[0].characteristics[0].value.bytes.map((e, index) => { return String.fromCharCode(e) })
        console.log( k.join(""));
        for (var i = 0; i < results.length; i++) {
          var peripheral = results[i]
          peripheral.connected = true;
          peripherals.set(peripheral.id, peripheral);
          setList(Array.from(peripherals.values()));
        }
      });
    }
  
    const handleDiscoverPeripheral = (peripheral) => {
      // console.log('Got ble peripheral', peripheral);
      if (peripheral.name=='PLALUVS') {
        peripherals.set(peripheral.id, peripheral);
      setList(Array.from(peripherals.values()));     
      }
     
    }
  
    const testPeripheral = (peripheral) => {
      if (peripheral){
        if (peripheral.connected) {
          console.log("연결")
          BleManager.disconnect(peripheral.id);
        }else{
          BleManager.connect(peripheral.id).then(() => {
            let p = peripherals.get(peripheral.id);
            console.log("연결")
            if (p) {
              p.connected = true;
              peripherals.set(peripheral.id, p);
              setList(Array.from(peripherals.values()));
            }
            console.log('Connected to ' + peripheral.id);
  
  
            setTimeout(() => {
  
              /* Test read current RSSI value */
              BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
                console.log('Retrieved peripheral services', peripheralData);
                  console.log(peripheralData.characteristics[0])
                  // let k = peripheralData.value.bytes
                  // for (let i = 0; i < k.length; i++)
                  // {
                  //     k[i]=k[i].String.charCodeAt(k[i])
                  // }
                  // console.log(k.join(""))
                BleManager.readRSSI(peripheral.id).then((rssi) => {
                  console.log('Retrieved actual RSSI value', rssi);
                  let p = peripherals.get(peripheral.id);
                  if (p) {
                    p.rssi = rssi;
                    peripherals.set(peripheral.id, p);
                    setList(Array.from(peripherals.values()));
                  }                
                });                                          
              });
  
              // Test using bleno's pizza example
              // https://github.com/sandeepmistry/bleno/tree/master/examples/pizza
              /*
              BleManager.retrieveServices(peripheral.id).then((peripheralInfo) => {
                console.log(peripheralInfo);
                var service = '13333333-3333-3333-3333-333333333337';
                var bakeCharacteristic = '13333333-3333-3333-3333-333333330003';
                var crustCharacteristic = '13333333-3333-3333-3333-333333330001';
                setTimeout(() => {
                  BleManager.startNotification(peripheral.id, service, bakeCharacteristic).then(() => {
                    console.log('Started notification on ' + peripheral.id);
                    setTimeout(() => {
                      BleManager.write(peripheral.id, service, crustCharacteristic, [0]).then(() => {
                        console.log('Writed NORMAL crust');
                        BleManager.write(peripheral.id, service, bakeCharacteristic, [1,95]).then(() => {
                          console.log('Writed 351 temperature, the pizza should be BAKED');
                          
                          //var PizzaBakeResult = {
                          //  HALF_BAKED: 0,
                          //  BAKED:      1,
                          //  CRISPY:     2,
                          //  BURNT:      3,
                          //  ON_FIRE:    4
                          //};
                        });
                      });
                    }, 500);
                  }).catch((error) => {
                    console.log('Notification error', error);
                  });
                }, 200);
              });*/
  
              
  
            }, 900);
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
      bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', handleUpdateValueForCharacteristic );
  
     
      
      return (() => {
        // console.log('unmount');
        // bleManagerEmitter.removeListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral);
        // bleManagerEmitter.removeListener('BleManagerStopScan', handleStopScan );
        // bleManagerEmitter.removeListener('BleManagerDisconnectPeripheral', handleDisconnectedPeripheral );
        // bleManagerEmitter.removeListener('BleManagerDidUpdateValueForCharacteristic', handleUpdateValueForCharacteristic );
      })
    }, []);
  
    const renderItem = (item) => {
      const color = item.connected ? 'green' : '#fff';
      return (
        <TouchableHighlight onPress={() => testPeripheral(item) }>
          <View style={[styles.row, {backgroundColor: color}]}>
            <Text style={{fontSize: 12, textAlign: 'center', color: '#333333', padding: 10}}>{item.name}</Text>
            <Text style={{fontSize: 10, textAlign: 'center', color: '#333333', padding: 2}}>RSSI: {item.rssi}</Text>
            <Text style={{fontSize: 8, textAlign: 'center', color: '#333333', padding: 2, paddingBottom: 20}}>{item.id}</Text>
          </View>
        </TouchableHighlight>
      );
    }
  
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              
              <View style={{margin: 10}}>
                <Button 
                  title={'Scan Bluetooth (' + (isScanning ? 'on' : 'off') + ')'}
                  onPress={() => startScan() } 
                />            
              </View>
  
              <View style={{margin: 10}}>
                <Button title="Retrieve connected peripherals" onPress={() => retrieveConnected() } />
              </View>
  
              {(list.length == 0) &&
                <View style={{flex:1, margin: 20}}>
                  <Text style={{textAlign: 'center'}}>No peripherals</Text>
                </View>
              }
            
            </View>              
          </ScrollView>
          <FlatList
              data={list}
              renderItem={({ item }) => renderItem(item) }
              keyExtractor={item => item.id}
                />              
                {/* {
                 <>
                     <View style={styles.lowButton1}>
                        <Text >상태</Text>     
                        <View style={{alignItems:'center'}}>
                                <Text style={styles.fontSize}>{mode}</Text>   
                         </View>
                       
                        <Text >충전시간</Text>     
                        <View style={{alignItems:'center'}}>
                                <Text style={styles.fontSize}>{time}</Text> 
                        </View>
                            <Text >모드</Text>     
                        <View style={{alignItems:'center'}}>
                                <Text style={styles.fontSize}>{position}</Text> 
                        </View>
                         <Text >단계</Text>     
                              
                        <View style={{alignItems:'center'}}>
                                <Text style={styles.fontSize}>{level}</Text> 
                        </View>            
                  
                      
                   </View>
                    </> 
                } */}
        </SafeAreaView>
      </>
    );
  };
  
const styles = StyleSheet.create({
    fontSize: {
        fontSize: 20,
        marginVertical:10,
        color: "gray",
       
  },
    lowButton1: {
        height:300,
        backgroundColor:"white",
        marginHorizontal:20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0.15,
     
    
        marginVertical: 20,
    },
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
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