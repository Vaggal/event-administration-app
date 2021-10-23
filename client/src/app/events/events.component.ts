import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppEvent } from '../typings';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events!: AppEvent[];

  constructor(private router: Router, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      this.events = data.events;
    });

    this.router.events.pipe(filter((e: Event): e is NavigationStart => e instanceof NavigationStart)).subscribe((e: NavigationStart) => {
      if (e.navigationTrigger === 'imperative') {
        const currentNavigation = this.router.getCurrentNavigation();
        if (currentNavigation?.extras?.state) {
          const state = currentNavigation.extras.state;

          if (!this.events.some((event) => event.id === state.id)) {
            const newEvent: AppEvent = {
              id: state.id,
              title: state.title,
              description: state.description,
              organizer: state.organizer,
              address: state.address,
              date: state.date,
            };
            this.events.push(newEvent);
          }
        }
      }
    });
  }
}
