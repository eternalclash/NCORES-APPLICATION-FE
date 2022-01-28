import React from 'react';
import { StyleSheet, Modal, View, Pressable, Text } from 'react-native';


const LogoutModal = ({visible, onClose}) => {
    return (
        <>
            <Modal 
                visible={visible}
                transparent={true}
    
                onRequestClose={onClose}
                style={{marginHorizontal:20}}
            >
                <Pressable style={{marginHorizontal:20}} >
                    <View style={{width:"100%",height:150,borderRadius:8,backgroundColor:"white",position:"absolute",top:300}}>
                    <Text style={{fontSize:20,marginLeft:20,marginTop:20}}>로그아웃 할까요?</Text> 
                    <View style={{flexDirection:"row",justifyContent:"flex-end",marginTop:70,marginRight:20}}>
                        <Text style={{marginRight:30}}>아니요</Text>
                        <Text>로그아웃</Text>
                    </View>
                    </View>

            </Pressable>

            </Modal>
        
        </>
  );
};

export default LogoutModal;
