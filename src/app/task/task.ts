export class Task {
    id: number;
    title: string = '';
    date: Date = null;
    description: string = '';
    done: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}