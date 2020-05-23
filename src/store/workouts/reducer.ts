import { IWorkout } from 'src/services/workouts/workouts-interface';
import { Reducer } from 'redux';
import * as actions from './actions';

interface StateRequest<T> {
  data: T;
  loading: boolean;
  error: Error | null;
}

export interface IIWorkoutsState extends StateRequest<IWorkout[]> {}

export const workoutsInitialState: IIWorkoutsState = {
  data: [],
  loading: false,
  error: null,
};

const workoutsReducer: Reducer<IIWorkoutsState, actions.WorkoutsActions> = (
  state = workoutsInitialState,
  action,
) => {
  switch (action.type) {
    case actions.FETCH_WORKOUTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_WORKOUTS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case actions.FETCH_WORKOUTS_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default workoutsReducer;
