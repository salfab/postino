import { RequestConfig } from './../../../models/RequestConfig';
import { Action } from '@ngrx/store';

export enum RequestConfigActionTypes {
    UpdateVerb = '[Verb] Update',
    UpdateBody = '[Body] Update',
    TestRequestConfig = '[RequestConfig] Test'
}

export class UpdateVerb implements Action {
    readonly type = RequestConfigActionTypes.UpdateVerb;
    constructor(public verb: string) {}
}

export class UpdateBody implements Action {
    readonly type = RequestConfigActionTypes.UpdateBody;
    constructor(public body: string) {}
}

export class TestRequestConfig implements Action {
    readonly type = RequestConfigActionTypes.TestRequestConfig;
    constructor() {}
}
export type RequestConfigActions = RequestConfig ;
