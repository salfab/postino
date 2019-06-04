import { UpdateVerb, RequestConfigActionTypes, UpdateBody } from './../../actions/requestConfig/requestConfig.action';
import { Action } from '@ngrx/store';


export interface RequestConfigState {
    verb: string;
    body: string;
}

export const initialState: RequestConfigState = {
    verb : undefined,
    body : undefined
};

export function requestConfigReducer(state: RequestConfigState = initialState, action: Action): RequestConfigState {
    switch (action.type) {
        case RequestConfigActionTypes.UpdateBody:
            {
                const act = action as UpdateBody;
                const body = act.body;
                return {
                    ...state,
                    body
                };
            }
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