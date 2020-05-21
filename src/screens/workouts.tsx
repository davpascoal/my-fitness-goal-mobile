import React, { useEffect, useState, useCallback } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageList from '../components/image-list/image-list';
import { getWorkouts } from '../services/workouts/workouts-service';
// import WorkoutsMock from '../../__mocks__/workouts-mock';

export default () => {
  const [workoutsData, setWorkoutsData] = useState([]);

  const handleFetchWorkouts = useCallback(async () => {
    try {
      const payload = await getWorkouts();
      setWorkoutsData(payload);
      console.log('payload', payload);
    } catch (error) {
      console.log('Error fetching Workouts data', error);
    }
  }, []);

  useEffect(() => {
    handleFetchWorkouts();
  }, [handleFetchWorkouts]);

  return (
    <View style={styles.container}>
      <Text>Workout</Text>
      <ImageList data={workoutsData} />
    </View>
  );
};

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
