import {Injectable} from '@angular/core';
import {Task} from './../task';

@Injectable()
export class TaskDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 4;

  // Placeholder for task's
  tasks: Task[] = [
      new Task({id: 1,title: 'Shopping'}),
      new Task({id: 2,title: 'Working on Project'}),
      new Task({id: 3,title: 'Go walking'}),
      new Task({id: 4,title: 'Meet Max'})
  ];

  constructor() {
  }

  // Simulate POST /tasks
  addTask(task: Task): TaskDataService {
    if (!task.id) {
      task.id = ++this.lastId;
    }
    this.tasks.push(task);
    return this;
  }

  // Simulate DELETE /tasks/:id
  deleteTaskById(id: number): TaskDataService {
    this.tasks = this.tasks
        .filter(task => task.id !== id);
    return this;
  }

  // Simulate PUT /tasks/:id
  updateTaskById(id: number, values: Object = {}): Task {
    let task = this.getTaskById(id);
    if (!task) {
      return null;
    }
    Object.assign(task, values);
    return task;
  }

  // Simulate GET /tasks
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // Simulate GET /tasks/:id
  getTaskById(id: number): Task {
    return this.tasks
        .filter(task => task.id === id)
        .pop();
  }

  // Toggle task done
  toggleTaskDone(task: Task){
    let updatedTask = this.updateTaskById(task.id, {
      done: !task.done
    });
    return updatedTask;
  }

  // Delete all Tasks with are done
  clearDoneTasks(): TaskDataService {
    this.tasks = this.tasks
        .filter(task => task.done !== true);
    return this;
  }

}