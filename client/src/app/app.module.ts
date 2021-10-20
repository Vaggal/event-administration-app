import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavigationComponent, EventsComponent, EventComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
