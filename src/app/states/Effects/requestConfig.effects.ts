import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TestRequestConfig } from '../actions/requestConfig/requestConfig.action';
import { RequestService } from '../../services/RequestService.service';
 
@Injectable()
export class RequestConfigEffects {

  @Effect()
  testRequestConfig$ = this.actions$
    .pipe(
      ofType('[RequestConfig] Test'),
      mergeMap(() => {
        console.warn('Yippie Kay-yay!');
        return Observable.create();
      }));

  constructor(private actions$: Actions){

  }
}

