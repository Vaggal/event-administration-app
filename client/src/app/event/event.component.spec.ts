import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

import { LimitStringLengthPipe } from '../limit-string-length.pipe';
import { MaterialModule } from '../material.module';
import { EventComponent } from './event.component';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [EventComponent, LimitStringLengthPipe],
      providers: [{ provide: MATERIAL_SANITY_CHECKS, useValue: false }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
