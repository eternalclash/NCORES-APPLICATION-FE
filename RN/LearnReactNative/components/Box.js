import React from 'react';
import { View, StyleSheet } from 'react-native';
const Box = (props) => {
  return <View style={[{backgroundColor:"red"}, props.rounded ? styles.rounded : null, sizes[props.size]]}/>
}
const styles = StyleSheet.create({
  box: {

    backgroundColor: 'black',
   
  },
  rounded: {
    borderRadius:16,
  },
  medium: {
    width: 64,
    height:64
  }
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large:styles.large,
}
Box.defaultProps = {
  size:'medium'
}

export default Box;
