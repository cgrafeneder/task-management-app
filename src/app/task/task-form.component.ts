import {Component, OnInit} from '@angular/core';
import {TasksService} from './tasks.service';
import {Task} from './task';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'task-form', // brauch ich nicht wirklich da routing
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css'],
    providers: [TasksService],
    inputs: ['task']
})

export class TaskFormComponent implements OnInit{

    public task: Task;

    constructor(private taskService: TasksService, private route: ActivatedRoute){
        console.log("constructor");
    }

    ngOnInit() {


    }


}