import React, {useState} from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  Platform,
  ActionSheetIOS,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import ActionSheetModal from './ActionSheetModal';

const TABBAR_HEIGHT = 49;
const imagePickerOption = {
  mediaType: 'photo',
  maxWidth: 768,
  maxHeight: 768,
  includeBase64: Platform.OS === 'android',
};

function CameraButton() {
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const bottom = Platform.select({
    android: TABBAR_HEIGHT / 2,
    ios: TABBAR_HEIGHT / 2 + insets.bottom - 4,
  });

  const onPickImage = res => {
    if (res.didCancel || !res) {
      return;
    }
    navigation.push('Upload', {res});
  };
    //res라우트 파라미터를 받아와 이를 Image 컴포넌트를 사용해 화면에 보여줍니다.

  const onLaunchCamera = () => {
    launchCamera(imagePickerOption, onPickImage);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  };

  const onPress = () => {
    if (Platform.OS === 'android') {
      setModalVisible(true);
      return;
    }

    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: '사진 업로드',
        options: ['카메라로 촬영하기', '사진 선택하기', '취소'],
        cancelButtonIndex: 2,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          onLaunchCamera();
        } else if (buttonIndex === 1) {
          onLaunchImageLibrary();
        }
      },
    );
  };

  return (
    <>
      <View style={[styles.wrapper, {bottom}]}>
        <Pressable
          android_ripple={{
            color: '#ffffff',
          }}
          style={styles.circle}
          onPress={onPress}>
      
        </Pressable>
      </View>
      <ActionSheetModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        actions={[
          {
            icon: 'camera-alt',
            text: '카메라로 촬영하기',
            onPress: onLaunchCamera,
          },
          {
            icon: 'photo',
            text: '사진 선택하기',
            onPress: onLaunchImageLibrary,
          },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 5,
    borderRadius: 36,
    height: 72,
    width: 72,
    position: 'absolute',
    left: '50%',
    transform: [
      {
        translateX: -37,
      },
    ],
    ...Platform.select({
      ios: {
        shadowColor: '#4d4d4d',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
     
    }),
  },
  circle: {
    backgroundColor: 'black',
    borderRadius: 36,
    height: 72,
    width: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CameraButton;