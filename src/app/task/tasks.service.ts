import {Injectable} from '@angular/core';
import {Task} from './task';

@Injectable()
export class TasksService {
    lastId: number; // simulate auto increment
    tasks: Task[];

    constructor() {
        this.tasks = [
            new Task({id: 1, title: 'Shopping'}),
                new Task({id: 2, title: 'Working on Project', date: new Date("May 4, 2017 10:13:00")}),
                new Task({id: 3, title: 'Go walking', done: true}),
                new Task({id: 4, title: 'Meet Max', date: new Date("February 4, 2017 10:13:00"), done: true})
            ];
        this.lastId = 4;
    }

    get(){
        return this.tasks;
    }

    getWithFilter(filter_status){
        if(filter_status === 'completed' || filter_status === 'active'){
            var isDone = filter_status === 'completed';
            return this.tasks.filter(task => task.done === isDone);
        }
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
        return this.tasks;
    }

    toggleDone(task: Task){
        let updatedTask = this.updateById(task.id, {
            done: !task.done
        });

        return updatedTask;
    }

}