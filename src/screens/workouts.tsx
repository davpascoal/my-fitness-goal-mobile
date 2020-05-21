import React from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import ImageList from '../components/image-list/image-list';
import WorkoutsMock from '../../__mocks__/workouts-mock';

export default () => (
  <View style={styles.container}>
    <Text>Workout</Text>
    <ImageList data={WorkoutsMock} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 0.3,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
});
