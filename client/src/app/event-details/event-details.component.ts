import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppEvent } from '../typings';

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

  constructor(public dialogRef: MatDialogRef<EventDetailsComponent>, @Inject(MAT_DIALOG_DATA) public eventData: AppEvent) {
    this.id = eventData.id;
    this.title = eventData.title;
    this.description = eventData.description;
    this.organizer = eventData.organizer;
    this.location = eventData.location;
    this.date = eventData.date;
  }

  ngOnInit(): void {
    console.log('test');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  template: '',
})
export class EventDetailsEntryComponent {
  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.openDialog(data.event);
    });
  }
  openDialog(eventData: AppEvent): void {
    const dialogRef = this.dialog.open(EventDetailsComponent, {
      data: eventData,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
