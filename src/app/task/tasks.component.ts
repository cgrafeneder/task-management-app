import { Component } from '@angular/core'
import {Task} from './../task';
import {TaskDataService} from './task-data.service';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['tasks.component.css'],
    providers: [TaskDataService]
})

export class TasksComponent{
    newTask: Task = new Task();


    constructor(private taskDataService: TaskDataService) {
    }

    addTask() {
        this.taskDataService.addTask(this.newTask);
        this.newTask = new Task();
    }

    toggleTaskDone(task) {
        this.taskDataService.toggleTaskDone(task);
    }

    removeTask(task) {
        this.taskDataService.deleteTaskById(task.id);
    }
    clearDoneTasks(){
        this.taskDataService.clearDoneTasks();
    }

    get tasks() {
        return this.taskDataService.getAllTasks();
    }

}