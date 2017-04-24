import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { TasksComponent } from "./task/tasks.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TaskDetailsComponent } from "./task/task-details.component";

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, TasksComponent, TaskDetailsComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
