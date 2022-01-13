import React from 'react'
import { Modal,StyleSheet,Pressable,View,Text } from 'react-native'
const UploadModeModal = ({onClose}) => {
    return (
        <Modal
         
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        
        >
            <Pressable style={StyleSheet.background} onPress={onClose} >
            <View style={StyleSheet.actionButoon}>
                <Pressable
                    style={styles.actionButton}
                    
                >
                    {/* <Icon
                        name="camera-alt"
                        color="#757575"
                        size={24}
                        style={styles.icon}
                        
                    /> */}
                        <Text style={styles.actionText}>
                            카메라로 촬영하기
                   </Text>
                </Pressable>
                <Pressable style={styles.actionButton}>
                    {/* <Icon  color="#757575" size={24} style={styles.icon} /> */}
                    <Text stlye={styles.actionText}>사진 선택하기</Text>
                    </Pressable>
                    
                </View>
                </Pressable>
        </Modal>
    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: `rgba(0,0,0,0.6)`,
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    whiteBox: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 4,
        elevation:2,
    },
    actionButton: {
        padding: 16,
        flexDirection: 'row',
        alginitems:'center'
    },
    icon: {
        marginRight: 8
    },
    text: {
        fontSize:16,
    }
})
export default UploadModeModal
