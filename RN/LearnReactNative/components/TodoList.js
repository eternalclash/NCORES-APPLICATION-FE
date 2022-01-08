import React from 'react'
import { FlatList, Text, View, StyleSheet,Image } from 'react-native'

function TodoList(props) {
    console.log(props.todos)
    return (
        <View style={styles.list}>
            {
                props.todos.map((element, index) => {
                    return (
                     
                        <View style={styles.item}  >
                            <View style={[styles.circle, element.done && styles.filled]}  onPress={()=>props.onToggle(element.id)} >
                            {element.done&& (<Image source={require('../assets/icons/check_white/check_white.png')}/>)}
                            </View>
                            <Text style={[styles.info,element.done&&styles.lineThrough]}>{element.text}</Text>
                            </View>
                     
                    )
                })
        }
        </View>
    
        
           
    );
}
//TodoList 컴포넌트는 todos Props를 받아와서 해당 값을 FlatList의 data Props로 설정
//data Props 설정하면 renderItem을 통해 배열 안의 각 원소들 데이터를 가리키는 뷰
//keyExtractor Props는 각 항목의 고유 값을 추출해주는 함수
//기본적으로는 항목의 순서값인 index를 사용함
const styles = StyleSheet.create({
    list: {
        flex: 1,

    },
    item: {
        flexDirection: 'row',
       
        alignItems: 'center',
        padding:16,
        fontSize: 24,
        borderBottomWidth: 1,
        borderColor:'#e0e0e0',
        
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: '#26a69a',
        borderWidth: 1,
        marginRight:16,
    },
    filled: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#26a69a'
    },
    info: {
        fontSize:25,
    },
    lineThrough: {
        textDecorationLine: 'line-through',
        color:'#9e9e9e',
    }

})

export default TodoList
