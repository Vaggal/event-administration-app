import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventsService } from './events.service';
import { AppEvent } from './typings';

@Injectable({
  providedIn: 'root',
})
export class EventsResolver implements Resolve<AppEvent[] | AppEvent> {
  constructor(private eventsService: EventsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AppEvent[]> | Observable<AppEvent> {
    const method = route.data['resolveMethod'];
    let result: any;
    switch (method) {
      case 'getAllEvents':
        result = this.getAllEvents();
        break;
      case 'getEventWithId':
        result = this.getEventWithId(route.params.id);
        break;
      default:
        result = this.getAllEvents();
        break;
    }
    return result;
  }

  getAllEvents(): Observable<AppEvent[]> {
    return this.eventsService.getAllEvents();
  }

  getEventWithId(id: string): Observable<AppEvent> {
    return this.eventsService.getEventWithId(id);
  }
}
