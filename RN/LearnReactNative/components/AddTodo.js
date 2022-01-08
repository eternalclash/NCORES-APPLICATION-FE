import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Image, TouchableOpacity, KeyboardAvoidingViewComponent, Keyboard} from 'react-native';
const AddTodo = ({onInsert}) => {
    const [text, setText] = useState('')
    const onPress = () => {
        onInsert(text)
        setText('');
        Keyboard.dismiss();
    }
    console.log(text)
    return (
    
            <View style={styles.block} >
            <TextInput placeholder="할일을 입력하세요"
                value={text}
                onChangeText={setText}
                style={styles.input} />
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
              
            <View style={styles.buttonStyle} >
                <Image source={require('../assets/icons/add_white/add_white.png')}/>
                    </View>
                   
                </TouchableOpacity>
            </View>
    
)
}
const styles = StyleSheet.create({
    block: {
        height: 64,
        paddingHorizontal: 8,
        borderColor: '#bbbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection:'row',
    },
    input: {
        flex:1,
        fontSize: 16,
        paddingVertical: 8,
      
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        backgroundColor: '#26a69a',
        borderRadius: 24,
        paddingVertical: 8,
    }
});
//paddingHorizonal은 좌우측 패딩 설정
//paddingVertical 상하 패딩 설정
export default AddTodo;
