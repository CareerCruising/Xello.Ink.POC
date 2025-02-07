import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

export enum WistiaState {
  beforeplay = 'beforeplay',
  play = 'playing',
  pause = 'pause',
  ended = 'ended',
}

@Injectable({
  providedIn: 'root',
})
export class WistiaService {
  public _state$ = new BehaviorSubject<WistiaState>(WistiaState.beforeplay);
  constructor() {}

  get status(): Observable<WistiaState> {
    return this._state$.asObservable().pipe(share());
  }

  public reset(): void {
    return this._state$.next(WistiaState.ended);
  }

  public play(): void {
    return this._state$.next(WistiaState.play);
  }

  public pause(): void {
    return this._state$.next(WistiaState.pause);
  }

  public stop(): void {
    return this._state$.next(WistiaState.ended);
  }
}
