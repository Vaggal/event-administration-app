import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventsService } from './events.service';
import { AppEvent } from './typings';

@Injectable({
  providedIn: 'root',
})
export class EventsResolver implements Resolve<AppEvent[]> {
  constructor(private eventsService: EventsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AppEvent[]> | AppEvent[] {
    return this.eventsService.getAllEvents();
  }
}
