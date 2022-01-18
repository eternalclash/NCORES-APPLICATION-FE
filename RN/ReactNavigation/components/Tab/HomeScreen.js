import React, {useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FeedScreen from './SkinTestScreen';
import { Text } from 'react-native';
const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [navigation])
    return (
        <Text>
        
        </Text>
    )
}

export default HomeScreen
