import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

export default (props: any) => {
  const workouts = useSelector((state) => state.workouts);
  console.log('workouts', workouts.data);

  return (
    <View style={styles.container}>
      {/* <ImageBackground
      source={image}
      style={styles.image}
    >
      <Text style={styles.text}>Burn Fat in 20 Minutes</Text>
    </ImageBackground> */}
      <Text>Home!</Text>
      {/* <Text>{workouts}</Text> */}
    </View>
  );
};

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
