import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsubscribeService {
  isCreated = false;

  private unsubscribe$: Subject<void>;

  subscription(): Subject<void> {
    if (!this.isCreated) {
      this.isCreated = true;
      this.unsubscribe$ = new Subject<void>();
    }

    return this.unsubscribe$;
  }

  destroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.isCreated = false;
  }
}
