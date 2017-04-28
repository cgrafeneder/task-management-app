export class Task {
    id: number;
    title: string = '';
    date: string = 'not set';
    description: string = '';
    done: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}