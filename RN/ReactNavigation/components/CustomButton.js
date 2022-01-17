import { produceWithPatches } from 'immer';
import React from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'
const CustomButton = ({ onPress,color, title, hasMarginBottom, theme }) => {
    const isPrimary = theme === 'primary';
    const isGender = theme === 'gender';
    const isBlue = color === 'blue';
    const isRed = color === 'red';
    const isBlack = color === 'black';
    return (
        <View style={[ isBlack&&styles.black,isRed&&styles.red,isBlue&&styles.blue  ,isGender&&styles.genderWrap,styles.block, hasMarginBottom && styles.margin]}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                   styles.wrapper,    
                    pressed && { opacity: 0.5 },
                    isPrimary && styles.primaryWrapper //primary 
                 
            ]}
            >
                <Text style={[styles.text, isPrimary ? styles.primaryText : styles.secondaryText]}>{title}</Text>    
            </Pressable>
        </View>
    )
}
CustomButton.defaultProps = {
    theme: 'primary',
}
const styles = StyleSheet.create({
    overflow: {
        borderRadius: 4,
        overflow: 'hidden'
    },
    wrapper: {
        borderRadius: 4,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.7,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    margin: {
        marginBottom: 20,
    },
    primaryWrapper: {
        backgroundColor: `#191919`
    },
    primaryText: {
        color: 'white'
    },
    secondaryText: {
        color: 'black',
        fontWeight: '500',
        
    },
    genderWrap: {
        width:'45%'
    },
    blue: {
        backgroundColor:'lightblue'
    },
    red: {
        backgroundColor:'pink'
    },
    black: {
        backgroundColor: 'black',
        fontColor:'white',
    }
});
export default CustomButton;