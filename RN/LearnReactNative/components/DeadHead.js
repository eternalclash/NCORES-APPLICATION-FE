import React from 'react'
import { View, Text, StyleSheet,StatusBar } from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context'

function DateHead(props) {
    const year = props.date.getFullYear();
    const month = props.date.getMonth() + 1;
    const day = props.date.getDate();
    const { top } = useSafeAreaInsets();
    console.log("Hi")
    return (<>
        <View style={[styles.statusBarPlaceHolder, { height: top }]} />
        <StatusBar backgroundColor='#26a69a'/>
        <View style={styles.block}> 
            <Text style={styles.dateText}>{year}년 {month}월 {day}일</Text>
        </View>
        </>
    ) 
}
const styles = StyleSheet.create({
    statusBarPlaceHolder: {
        backgroundColor: '#26a69a',
    },
    block: {
        padding: 16,
        backgroundColor: '#26a69a',
       
    },
    dateText: {
        fontSize: 25,
        color: 'white',
        flexDirection:'row',
        marginHorizontal:'25%',
    }
});

export default DateHead;