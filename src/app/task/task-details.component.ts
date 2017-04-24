import {Component, OnInit} from '@angular/core';
import {Task} from './../task';
import {TaskDataService} from './task-data.service';

@Component({
    selector: 'task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['task-details.component.css'],
    inputs: ['task'],
    providers: [TaskDataService]
})

export class TaskDetailsComponent implements OnInit {

    public task: Task;

    /*constructor(private _appServices: AppServices) {
    }
    updateOrder(order: Order) {
        this._appServices.updateOrder(order);
    }
    onSubmit() {
        this.updateOrder(this.order);
    };*/


    constructor(private taskDataService: TaskDataService) {
    }

    ngOnInit() {
        this.task =  this.taskDataService.getTaskById(1);
    }
}