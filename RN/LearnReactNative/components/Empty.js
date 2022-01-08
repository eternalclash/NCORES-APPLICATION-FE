import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
function Empty() {
    return (
        <View style={styles.block}>
            <Image source={require('../assets/images/young_and_happy.png')}
                style={styles.image} resizeMode="cover" />
          <Text style={styles.description}>할일이 없어요!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 24,
        color: '#9e9e9e'
    },
    image: {
        width: 300,
        height: 200,
    }
});

export default Empty;
//flex:1을 설정해 자신이 차지할 수 있는 영역을 모두 차지함
//alignItems와 justifyContent값을 모두 center=> 내용이 중앙에 위치함