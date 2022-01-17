import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const MainPage = () => {
    return (
        <View style={styles.main}>
            <View style={styles.mainImage}>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80"}}
                style={styles.cosmetic}
                resizeMode="cover"
            />
            </View>
            <View style={styles.information}>
                <Text style={styles.informationKeyword}>민감한 피부엔 이런 제품</Text>
                <Text style={styles.informationSubKeyword}>비슷한 고민을 가진 고객님들은 이런 제품을 찜했어요</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
 
    },
    mainImage: {
        flex: 0.5,
        
    },
    cosmetic: {
        flex:1,
    },
    information: {
        flex: 1,
        paddingLeft: 10,
      
    },
    informationKeyword: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "500",
    },
    informationSubKeyword: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: "300",
    }
})

export default MainPage
