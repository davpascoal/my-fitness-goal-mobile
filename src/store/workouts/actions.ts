import { IWorkout } from '../../services/workouts/workouts-interface';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getWorkouts } from '../../services/workouts/workouts-service';

export const FETCH_WORKOUTS_REQUEST = 'FETCH_WORKOUTS_REQUEST';
export const FETCH_WORKOUTS_SUCCESS = 'FETCH_WORKOUTS_SUCCESS';
export const FETCH_WORKOUTS_FAILURE = 'FETCH_WORKOUTS_FAILURE';

export interface IFetchWorkoutsRequest
  extends Action<typeof FETCH_WORKOUTS_REQUEST> {}

export interface IFetchWorkoutsSuccess
  extends Action<typeof FETCH_WORKOUTS_SUCCESS> {
  payload: IWorkout[];
}

export interface IFetchWorkoutsFailure
  extends Action<typeof FETCH_WORKOUTS_FAILURE> {
  error: Error;
}

export type WorkoutsActions =
  | IFetchWorkoutsRequest
  | IFetchWorkoutsSuccess
  | IFetchWorkoutsFailure;

function fetchWorkoutsRequest(): IFetchWorkoutsRequest {
  return {
    type: 'FETCH_WORKOUTS_REQUEST',
  };
}

function fetchWorkoutsSuccess(payload: any): IFetchWorkoutsSuccess {
  return {
    type: FETCH_WORKOUTS_SUCCESS,
    payload,
  };
}

function fetchWorkoutsFailure(error: Error): IFetchWorkoutsFailure {
  return {
    type: 'FETCH_WORKOUTS_FAILURE',
    error,
  };
}

export const getWorkoutsAction: ActionCreator<ThunkAction<
  Promise<IFetchWorkoutsSuccess | IFetchWorkoutsFailure>,
  IWorkout[],
  null,
  IFetchWorkoutsSuccess
>> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchWorkoutsRequest());
    try {
      const workouts = await getWorkouts();
      return dispatch(fetchWorkoutsSuccess(workouts));
    } catch (error) {
      return dispatch(fetchWorkoutsFailure(error));
    }
  };
};
