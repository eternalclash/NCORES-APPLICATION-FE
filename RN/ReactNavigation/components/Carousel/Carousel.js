import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    id: 'item2',
    image: 'https://i.imgur.com/N3nQ9CS.jpg',
    title: '화장품1',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
  {
    id: 'item3',
    image: 'https://i.imgur.com/AzdYlDM.jpg',
    title: '화장품2',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
  {
    id: 'item1',
    image: 'https://i.imgur.com/s7GgEa8.jpg',
    title: '화장품3',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
  {
    id: 'item6',
    image: 'https://i.imgur.com/1O1Kd6T.jpg',
    title: '화장품4',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
  {
    id: 'item4',
    image: 'https://i.imgur.com/eNuhvpN.jpg',
    title: '화장품5',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },

  {
    id: 'item5',
    image: 'https://i.imgur.com/jEiBmma.jpg',
    title: '화장품6',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
];

const ITEM_WIDTH = 0.4*windowWidth;
const SEPARATOR_WIDTH = 10;
export default function ShopCarousel(props) {
  const {style} = props;
  const carouselRef = useRef(null);

  async function handleInstallNowClick(url) {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  function renderItem({item, index}) {
    const {image, title, url} = item;
    return (
      <Pressable
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.lowerContainer}>
          <View style={styles.lowerLeft}>
            <Text style={styles.titleText} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.descriptionText} numberOfLines={1}>
             피부,로션
            </Text>
          </View>
       
        </View>
      </Pressable>
    );
  }

  return (
   
 
      <Carousel
        keyExtractor={item => item?.id}
        style={[styles.carousel, style]}
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        itemWidth={0.4 * windowWidth}
        separatorWidth={SEPARATOR_WIDTH}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={windowWidth*0.4}
      />
    
   
  );
}

const styles = StyleSheet.create({
  
  carousel: {
    width: windowWidth,
    height: (ITEM_WIDTH + 100)*0.7,
    flexGrow: 0,
  },
  item: {
    // backgroundColor: 'white',

  
    flex: 2,
    borderRadius: 5,
 
    elevation: 3,
  },
  image: {
    flex: 1,
 
   
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  lowerLeft: {
    width: '50%',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C2127',

  },
  descriptionText: {
    fontSize: 14,

    color: '#A0A0A0',
  },
  button: {
    width: '40%',
    marginLeft: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#585B60',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#585B60',
  },
  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
    marginHorizontal: 10,
    borderColor: '#A0A0A0',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    borderColor: '#A0A0A0',
    paddingHorizontal: 10,
  },
  logo: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1C2127',
  },
});