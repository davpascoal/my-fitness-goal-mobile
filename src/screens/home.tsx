import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';

export default (props: any) => (
  <View style={styles.container}>
    {/* <ImageBackground
      source={image}
      style={styles.image}
    >
      <Text style={styles.text}>Burn Fat in 20 Minutes</Text>
    </ImageBackground> */}
    <Text>Home!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    // resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
