import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppEvent } from './typings';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private endpoint: string = environment.serverUrl + '/events';

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<AppEvent[]> {
    return this.http.get<AppEvent[]>(this.endpoint);
  }

  createEvent(data: object): Observable<AppEvent> {
    return this.http.post<AppEvent>(this.endpoint, data);
  }

  getEventWithId(id: string): Observable<AppEvent> {
    return this.http.get<AppEvent>(this.endpoint + `/${id}`);
  }

  updateEventWithId(id: string, data: AppEvent): Observable<AppEvent> {
    return this.http.put<AppEvent>(this.endpoint + `/${id}`, data);
  }

  deleteEventWithId(id: string): Observable<AppEvent> {
    return this.http.delete<AppEvent>(this.endpoint + `/${id}`);
  }
}
