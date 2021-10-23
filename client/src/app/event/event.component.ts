import { Component, Input } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() organizer!: string;
  @Input() address!: string;
  @Input() date!: Date;

  constructor(private router: Router) {
    router.events.pipe(filter((e: Event): e is NavigationStart => e instanceof NavigationStart)).subscribe((e: NavigationStart) => {
      if (e.navigationTrigger === 'imperative') {
        const currentNavigation = this.router.getCurrentNavigation();
        if (currentNavigation?.extras?.state) {
          const state = currentNavigation.extras.state;

          // change the values only if this state refers to this object
          if (this.id === state.id) {
            this.title = state.title;
            this.description = state.description;
            this.organizer = state.organizer;
            this.address = state.address;
            this.date = state.date;
          }
        }
      }
    });
  }
}
