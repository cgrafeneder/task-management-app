import {Component} from '@angular/core';
import {TasksService} from './tasks.service';
import {Task} from './task';

import { Router } from '@angular/router'

@Component({
    selector: 'task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css'],
    providers: [TasksService]
})

export class TaskListComponent {

    public selectedTask: Task;

    constructor(private taskService: TasksService, private router: Router){

    }

    /************ TASK *************/
    get tasks() {
        return this.taskService.get();
    }

    addTask(title){
        this.taskService.add(new Task({ title: title}));
    }

    editTask(task){
       this.selectedTask = task;
    }

    deleteTask(id){
        this.taskService.deleteById(id);
    }

    toggleTaskDone(task){
        this.taskService.toggleDone(task);
    }

}