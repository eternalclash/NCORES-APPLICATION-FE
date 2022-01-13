import React,{useState} from 'react'
import { Pressable, View, StyleSheet, ActionSheetIOS } from 'react-native';
import { Icon } from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import UploadModeModal from '../Modal/UploadModeModal';

const CameraButton = () => {
    const insets = useSafeAreaInsets();
    const [modalVisible, setModalVisible] = useState(false);
    const onPress = () => {
        ActionSheetIOS.showActionSheetWithOptions({
            options: [
                '카메라로 촬영하기', '사진 선택하기', '취소'
            ],
            cancelButtonIndex: 2,
        },
            (buttonIndex) => {
                if (buttonIndex == 0) {
                    console.log('카메라 촬용')
                }
                else if (buttonIndex === 1) {
                    console.log('사진 선택')
                }
       
        
            })
    }
    return (
        <>
        <View style={[styles.wrapper]}>
            <Pressable style={styles.circle}
             onPress={onPress}
            />
            {/* <Icon name="camera-alt" color="white" size={24}/> */}
            </View>   
            <UploadModeModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        zIndex: 5,
        borderRadius: 27,
        height: 54,
        width: 54,
        position: 'absolute',
        left: '50%',
        transform: [{
            translateX: -27,
        }],
            shadowColor: '#4d4d4d',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
        },
        circle: {
            backgroundColor: '#6200ee',
            borderRadius: 27,
            height: 54,
            width: 54,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
)

export default CameraButton
