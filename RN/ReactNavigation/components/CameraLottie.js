import React from 'react';
import LottieView from 'lottie-react-native'
import { View,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
const CameraLoading = () => {
    return <SafeAreaView style={{
        flex: 1, justifyContent: 'center', alignItems:'center',backgroundColor:"white"}}>
       

          
        <Progress.Circle size={100} indeterminate={true} color={'black'} borderWidth={1}/>
        <Text style={{marginTop:20,fontSize:20}}>로딩 중 입니다.</Text>
        <Text style={{fontSize:20}}>잠시만 기다려 주세요</Text>
    </SafeAreaView>;
};

export default CameraLoading;
