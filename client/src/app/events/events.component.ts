import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppEvent } from '../typings';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events!: AppEvent[];

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      this.events = data.events;
    });
  }
}
