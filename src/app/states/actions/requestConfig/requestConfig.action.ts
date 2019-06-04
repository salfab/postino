import { Action } from '@ngrx/store';
import { RequestConfig } from '../../../models/RequestConfig';



export enum RequestConfigActionTypes {
    UpdateVerb = '[Verb] Update',
    UpdateBody = '[Body] Update'
}

export class UpdateVerb implements Action {
    readonly type = RequestConfigActionTypes.UpdateVerb;
    constructor(public verb: string) {}
}

export class UpdateBody implements Action {
    readonly type = RequestConfigActionTypes.UpdateBody;
    constructor(public body: string) {}
}

export type RequestConfigActions = RequestConfig ;
