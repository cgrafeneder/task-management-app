import {Injectable} from '@angular/core';
import {Task} from './task';

@Injectable()
export class TasksService {

    // Placeholder for last id so we can simulate
    // automatic incrementing of id's
    lastId:number = 4;

    // Placeholder for task's
    tasks: Task[] = [
        new Task({id: 1, title: 'Shopping'}),
        new Task({id: 2, title: 'Working on Project'}),
        new Task({id: 3, title: 'Go walking'}),
        new Task({id: 4, title: 'Meet Max'})
    ];

    constructor() {
        console.log("TasksService loaded")
    }

    get(){
        return this.tasks;
    }

    getById(id: number): Task {
        return this.tasks
            .filter(task => task.id === id)
            .pop();
    }

    add(task: Task){
        if (!task.id) {
            task.id = ++this.lastId;
        }
        this.tasks.push(task);
        return this;
    }

    updateById(id: number, values: Object = {}): Task {
        let task = this.getById(id);
        if (!task) {
            return null;
        }
        Object.assign(task, values);
        return task;
    }

    deleteById(id: number) {
        this.tasks = this.tasks
            .filter(task => task.id !== id);
        console.log(this.tasks);
        return this;
    }

    toggleDone(task: Task){
        let updatedTask = this.updateById(task.id, {
            done: !task.done
        });

        return updatedTask;
    }

}