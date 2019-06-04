import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RequestConfigState, requestConfigReducer } from '../states/reducers/requestConfig/requestConfig.reducer';

export interface State {
  verb: string;

}

export const state = {
  requestConfigState: requestConfigReducer
};
