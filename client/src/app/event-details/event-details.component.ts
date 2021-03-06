import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AppEvent } from '../typings';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  dialogTitle!: string;

  id!: string;
  title!: string;
  description!: string;
  organizer!: string;
  address!: string;
  date!: Date;

  form!: FormGroup;
  formInitialValue!: object;
  formIsChanged: Boolean = false;

  eventsServiceObserver = {
    next: (response: AppEvent) => {
      const result = {
        id: response.id,
        title: response.title,
        description: response.description,
        organizer: response.organizer,
        address: response.address,
        date: response.date,
      };
      this.dialogRef.close(result);
    },
  };

  constructor(
    public dialogRef: MatDialogRef<EventDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public eventData: AppEvent,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private eventsService: EventsService
  ) {
    this.dialogTitle = eventData.id !== '' ? 'Event details' : 'Create new event';

    this.id = eventData.id;
    this.title = eventData.title;
    this.description = eventData.description;
    this.organizer = eventData.organizer;
    this.address = eventData.address;
    this.date = eventData.date;
  }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm(): void {
    this.form = this.fb.group({
      title: [this.title, [Validators.required]],
      organizer: [this.organizer, [Validators.required]],
      description: [this.description],
      date: ['', [Validators.required]],
      address: [this.address],
    });

    const dateString = this.date?.toString().substring(0, 16);
    this.setFormDate(dateString);

    this.formInitialValue = this.form.value;

    this.form.valueChanges.subscribe((value) => {
      this.formIsChanged = JSON.stringify(this.formInitialValue) !== JSON.stringify(value);
    });
  }

  submitForm() {
    if (this.formIsChanged) {
      if (this.id === '') {
        const data = this.form.value;
        delete data.id;
        this.eventsService.createEvent(data).subscribe(this.eventsServiceObserver);
      } else {
        this.eventsService.updateEventWithId(this.id, this.form.value).subscribe(this.eventsServiceObserver);
      }
    } else {
      this.dialogRef.close();
    }
  }

  formatDate(event: MatDatepickerInputEvent<any, any>) {
    var dateString = new Date(event.target.value).toISOString().substring(0, 16);
    this.setFormDate(dateString);
  }

  /**
   * Sets the form's date field
   */
  private setFormDate(date: any) {
    this.form.get('date')?.setValue(date, {
      onlyself: true,
    });
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
}

@Component({
  template: '',
})
export class EventDetailsEntryComponent {
  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    let dialogData;

    this.route.data.subscribe((data) => {
      if (data.event) {
        dialogData = data.event;
      } else {
        dialogData = {
          id: '',
          title: '',
          description: '',
          organizer: '',
          address: '',
          date: '',
        };
      }

      this.openDialog(dialogData);
    });
  }

  openDialog(eventData: AppEvent): void {
    const dialogRef = this.dialog.open(EventDetailsComponent, {
      data: eventData,
    });
    dialogRef.afterClosed().subscribe((result: AppEvent) => {
      this.router.navigate(['../'], { relativeTo: this.route, state: result });
    });
  }
}
