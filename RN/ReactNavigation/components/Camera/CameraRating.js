import { NavigationContainer } from '@react-navigation/native'
import React,{useState,useEffect} from 'react'
import { StyleSheet, View, Text ,Pressable} from 'react-native'
import { Rating } from 'react-native-ratings'
import { actionCreators as checkActions } from '../../redux/modules/check'
import { useDispatch,useSelector } from 'react-redux'
import CustomButton from '../CustomButton'
const CameraRating = ({ navigation }) => {
    const dispatch = useDispatch();
    const cameraCheck = useSelector(state => state.check.cameraCheck)
    const [rate,setRate] = useState(2)
    useEffect(() => {
        if (cameraCheck)
        {   
            dispatch(checkActions.cameraCheck(false))
            navigation.navigate("CameraPage")
            }
    }, [cameraCheck])
    function ratingCompleted(rating) {
        console.log( rating)
        setRate(rating)
    }
    const rateHandler = () => {
         
        dispatch(checkActions.ratingAPI(rate))
        // dispatch(signActions.setWorryAPI())

        // if (check)
        //     navigation.navigate("GetAge")
    }

    return (
        <View style={styles.main}> 
            <Text style={styles.font}>오늘의 피부 몇 점인가요?</Text>
            <View style={styles.main1}>
                <Text style={styles.font1}>{rate}점</Text>
            <Rating
                type='custom'
                jumpValue={1/2}
                ratingBackgroundColor='gray'
                tintColor='#ffffff'
                jumpValue={1}
                ratingCount={5}
                imageSize={50}
                
                startingValue={2}
                onFinishRating={ratingCompleted}
            />
            </View>
            <Pressable onPress={rateHandler} style={styles.form}>   
            <View >     
                   
                    <Text style={styles.textMedium}>시작하기</Text>    
                   
                    </View>
                    </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"white"
    },
    font: {
        fontSize: 30,
        position: 'absolute',
        top:150,
    },
    font1: {
        fontSize: 30,
        marginBottom:30
    },  
    main1: {
        position: 'absolute',
        top: 250,
        justifyContent: "center",
        alignItems:"center"
    },
    textMedium: {
        color:"white",
        fontSize: 20,
        marginBottom:5,
    },
    form: {
        backgroundColor:"black",
        width: '100%',
        height:60,
        position: 'absolute',
        bottom:0,
        justifyContent: "center",
        alignItems:"center",
      
    },
})
export default CameraRating
