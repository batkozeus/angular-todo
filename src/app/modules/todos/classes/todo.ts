export class Todo {
    id: number;
    title: string;
    description: string;
    endDate: Date;
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
