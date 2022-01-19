import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text ,Pressable} from 'react-native'
import { Rating } from 'react-native-ratings'
import CustomButton from '../CustomButton'
const CameraRating = ({navigation}) => {
    function ratingCompleted(rating) {
        console.log("Rating is: " + rating)
      }
    return (
        <View style={styles.main}> 
            <Text style={styles.font}>자가 점수 체크</Text>
            <View style={styles.main1}>
            <Rating
                type='custom'
                jumpValue={1/2}
                ratingBackgroundColor='gray'
                tintColor='#ffffff'
                jumpValue={1}
  ratingCount={5}
  imageSize={60}
                showRating
                startingValue={2}
                onFinishRating={ratingCompleted}
            />
            </View>
       
            <View style={styles.form}>     
                    <Pressable onPress={() => navigation.navigate(
                        "CameraPage"
                    )}>
                    <Text style={styles.textMedium}>시작하기</Text>    
                    </Pressable>
                    </View>
  

        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    font: {
        fontSize: 30,
        position: 'absolute',
        top:150,
    },
    main1: {
        position: 'absolute',
        top:250,
    },
    textMedium: {
        color:"white",
        fontSize: 20,
        marginBottom:5,
    },
    form: {
        backgroundColor:"black",
        width: '90%',
        height:60,
        marginTop:40,
        justifyContent: "center",
        alignItems:"center",
      
    },
})
export default CameraRating
