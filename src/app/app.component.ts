import {Component} from '@angular/core';
import {TasksService} from './task/tasks.service';
import {Task} from './task/task';

@Component({
  selector: 'root-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TasksService]
})

export class AppComponent {

  constructor(private taskService: TasksService){
  }


}
