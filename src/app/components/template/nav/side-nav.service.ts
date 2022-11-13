import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SideNavService {

  public sideNavToggleSubject: BehaviorSubject<boolean> = new BehaviorSubject<any>(null);

  public toggle() {
    return this.sideNavToggleSubject.next(true);
  }
}