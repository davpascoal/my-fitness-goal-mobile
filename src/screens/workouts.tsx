import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageList from '../components/image-list/image-list';
import { getWorkouts } from '../services/workouts/workouts-service';
// import WorkoutsMock from '../../__mocks__/workouts-mock';

export default () => {
  const [workoutsData, setWorkoutsData] = useState([]);

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const payload = await getWorkouts();
        // console.log('payload', payload);
        setWorkoutsData(payload);
      } catch (error) {
        console.log('Error fetching Workouts data', error);
      }
    }

    fetchWorkouts();
  });

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
