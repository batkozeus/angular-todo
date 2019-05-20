export interface ITodoClassObject {
    id: number;
    title: string;
    description: string;
    endDate: Date;
    complete: boolean;
}

export class Todo {
    id: number;
    title: string;
    description: string;
    endDate: Date;
    complete: boolean = false;

    constructor(values: ITodoClassObject = {} as ITodoClassObject) {
        this.id = values.id;
        this.title = values.title;
        this.description = values.description;
        this.endDate = values.endDate;
        this.complete = values.complete;
    }
}
