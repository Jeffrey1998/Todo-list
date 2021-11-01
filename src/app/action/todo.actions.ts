import {Todo} from '../models/Todo';

export class AddTodo {
    static readonly type = '[Todo] add'

    constructor(public payload: Todo) {}
}

export class RemoveTodo {
    static readonly type = '[Todo] Remove'

    constructor(public payload: number) {}
}

export class UpdateTodo {
    static readonly type = '[Todo] Update'

    constructor(public payload: number) {}
}