import workoutsReducer, {
  IIWorkoutsState,
  workoutsInitialState,
} from './workouts/reducer';
import { Action, Reducer, combineReducers } from 'redux';

interface IState {
  workouts: IIWorkoutsState;
}

// const initialState: IState = {
//   ...workoutsInitialState,,
// };

// const rootReducer: Reducer<IState, any> = (
//   state = initialState,
//   action: Action<any>,
// ) => {
//   return {
//     ...state,
//     workoutsReducer(state.workouts, action),
//   };
// };

const rootReducer = combineReducers({
  workouts: workoutsReducer,
});

export default rootReducer;
