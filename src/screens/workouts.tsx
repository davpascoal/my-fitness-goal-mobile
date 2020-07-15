import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageList from '../components/image-list/image-list';
import { getWorkoutsAction } from '../store/workouts/actions';
import { useDispatch, useSelector } from 'react-redux';

const Workouts = ({ navigation }) => {
  const dispatch = useDispatch();
  dispatch(getWorkoutsAction());

  return (
    <View style={styles.container}>
      <Text>Workout</Text>
      <ImageList
        data={useSelector((state) => state.workouts.data)}
        // onPress={() => navigation.navigate('WorkoutModal')}
      />
    </View>
  );
};

export default Workouts;

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
