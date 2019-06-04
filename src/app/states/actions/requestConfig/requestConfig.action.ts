import { Action } from '@ngrx/store';
import { RequestConfig } from '../../../models/RequestConfig';



export enum RequestConfigActionTypes {
    UpdateVerb = '[Verb] Update'
}

export class UpdateVerb implements Action {
    readonly type = RequestConfigActionTypes.UpdateVerb;
    constructor(public verb: string) {}
}

export type DeclarantActions = RequestConfig;
