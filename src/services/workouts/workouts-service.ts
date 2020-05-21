import { IWorkout } from './workouts-interface';

const URL = 'https://my-fitness-goal.herokuapp.com';

export const getWorkouts = (): Promise<IWorkout[]> => {
  return fetch(`${URL}/workouts`, {
    method: 'GET',
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<IWorkout[]>;
  });
};
