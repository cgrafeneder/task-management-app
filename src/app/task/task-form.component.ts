import {Component, OnInit} from '@angular/core';
import {TasksService} from './tasks.service';
import {Task} from './task';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'task-form', // is not necessary because of routing
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css'],
    providers: [TasksService],
    inputs: ['task']
})

export class TaskFormComponent implements OnInit{
    private task: Task;

    constructor(private taskService: TasksService){
        console.log("TaskFormComponent loaded");
    }

    cancleEditing(){
        this.task = null;
    }
    ngOnInit() {
    }
}