import {Component, OnInit} from '@angular/core';
import {TasksService} from './tasks.service';
import {Task} from './task';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css'],
    providers: [TasksService]
})

export class TaskListComponent implements OnInit{

    public selectedTask: Task;
    private filterStatus: string;

    constructor(private taskService: TasksService, private route: ActivatedRoute){

    }

    /************ TASK *************/
    get tasks() {
        return this.taskService.getWithFilter(this.filterStatus);
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


    ngOnInit() {
        console.log("TaskListComponent loaded");

        this.route.params.subscribe(params => {
            this.filterStatus = params['filter_status'];
            this.selectedTask = null;
        });
    }

}