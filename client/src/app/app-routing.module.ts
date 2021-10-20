import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
