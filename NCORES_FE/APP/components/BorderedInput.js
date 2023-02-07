import React from 'react'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
const BorderedInput = ({hasMarginBottom, ...rest},ref) => {
    return (
        <TextInput  placeholderTextColor="gray" style={[styles.input, hasMarginBottom && styles.margin]}
            ref={ref}
            {...rest}
        />
        
    )
}
const styles = StyleSheet.create({
    input: {
        borderColor: '#bdbdbd',
        borderWidth: 1,
        borderRadius: 4,
        height: 60,
        backgroundColor: 'white',
        
    },
    margin: {
        marginBottom: 16,
    }
})
//hasMarginBottom 값이 true라면 하단에 여백을 지정, hasMarginBottom Props로 하단 여백 지정, onPress와 title로 버튼을 클릭했을 때 지정
export default React.forwardRef(BorderedInput);
//onChangeText,value,placeholder => ...rest 사용해 지정한 키 외의 props를 객체에 담는다.  