
import { RequestConfigState, requestConfigReducer } from '../states/reducers/requestConfig/requestConfig.reducer';

export interface State {
  verb: string;

}

export const state = {
  requestConfigState: requestConfigReducer
};
