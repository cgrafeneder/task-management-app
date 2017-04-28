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
  curr_task: Task;

  constructor(private taskService: TasksService){
    this.curr_task = null;
  }

  /************ TASK *************/
  get tasks() {
    return this.taskService.get();
  }

  addTask(title){
    this.taskService.add(new Task({ title: title}));
  }

  editTask(id){
    this.curr_task = this.taskService.getById(id);
  }

  deleteTask(id){
    this.taskService.deleteById(id);
  }

  toggleTaskDone(task){
    this.taskService.toggleDone(task);
  }

}
