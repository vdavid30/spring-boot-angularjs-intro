import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
@Injectable()
  export class TodoService {
      private todos: Todo[] = [
          new Todo('todo 1'),
          new Todo('todo 2', 1, true),
          new Todo('todo 3')
        ];
  constructor() { }
  create(description: string, priority: Number = 1, completed: boolean = false){
    this.list().push(new Todo(description, priority, completed));
  }
  list(): Todo[] {
          return this.todos;
        }


}