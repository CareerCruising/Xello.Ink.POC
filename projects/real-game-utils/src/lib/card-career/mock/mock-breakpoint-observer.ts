import { BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';

export class MockBreakpointObserver {
  isMatched(value: string): boolean {
    return true;
  }
  observe(breakPoint: string): Observable<BreakpointState> {
    if (breakPoint === 'small') {
      return of({ matches: true, breakpoints: { [Breakpoints.Small]: true } });
    }

    return of({ matches: false, breakpoints: {} });
  }
}
