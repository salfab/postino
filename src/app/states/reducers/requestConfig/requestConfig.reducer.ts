import { UpdateVerb, RequestConfigActionTypes } from './../../actions/requestConfig/requestConfig.action';
import { Action } from '@ngrx/store';


export interface RequestConfigState {
    verb: string;
}

export const initialState: RequestConfigState = {
    verb : undefined
};

export function requestConfigReducer(state: RequestConfigState = initialState, action: Action): RequestConfigState {
    switch (action.type) {
        case RequestConfigActionTypes.UpdateVerb:
        {
            const act = action as UpdateVerb;
            const verb = act.verb;
            return {
                ...state,
                verb
            };
        }

        default:
            return state;
    }
}