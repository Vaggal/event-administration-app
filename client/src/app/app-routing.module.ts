import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsEntryComponent } from './event-details/event-details.component';
import { EventsResolver } from './events.resolver';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
    resolve: {
      events: EventsResolver,
    },
    data: {
      resolveMethod: 'getAllEvents',
    },
    children: [
      {
        path: 'new',
        component: EventDetailsEntryComponent,
      },
      {
        path: ':id',
        component: EventDetailsEntryComponent,
        resolve: {
          event: EventsResolver,
        },
        data: {
          resolveMethod: 'getEventWithId',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
