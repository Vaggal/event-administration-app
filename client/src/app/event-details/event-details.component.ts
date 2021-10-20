import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  id!: string;
  title!: string;
  description!: string;
  organizer!: string;
  location!: object;
  date!: Date;

  form!: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.id = data.event.id;
      this.title = data.event.title;
      this.description = data.event.description;
      this.organizer = data.event.organizer;
      this.location = data.event.location;
      this.date = data.event.date;
      console.log('Event Details with id: ', data);
    });
  }

  save() {
    console.log('save pressed');
  }

  close() {
    console.log('close pressed');
  }
}
