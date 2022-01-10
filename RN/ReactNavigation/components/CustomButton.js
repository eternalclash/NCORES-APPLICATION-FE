import React from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'
const CustomButton = ({ onPress, title, hasMarginBottom, theme }) => {
    const isPrimary = theme === 'primary';
    return (
        <View style={[styles.block, hasMarginBottom && styles.margin]}>
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
     
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    margin: {
        marginBottom: 8,
    },
    primaryWrapper: {
        backgroundColor: '#6200ee'
    },
    primaryText: {
        color: 'white'
    },
    secondaryText: {
        color: '#6200ee'
    },
});
export default CustomButton;