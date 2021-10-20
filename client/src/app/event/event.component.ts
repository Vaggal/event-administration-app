import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  @Input() id!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() organizer!: string;
  @Input() location!: object;
  @Input() date!: Date;

  constructor() {}

  ngOnInit(): void {
    console.log('event with id ' + this.id + ' initilized');
  }
}
