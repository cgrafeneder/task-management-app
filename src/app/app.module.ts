import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { IntroComponent } from "./intro/intro.component";
import { TaskListComponent } from "./task/task-list.component";
import { TaskFormComponent } from "./task/task-form.component";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, IntroComponent,
    TaskListComponent, TaskFormComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
