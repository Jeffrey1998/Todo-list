import { Component, OnInit } from '@angular/core';
import { AddTodo } from '../../action/todo.actions';
import { Store } from '@ngxs/store'
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(private store: Store) { }


  addTodo(id, description, isCompleted) {
    this.store.dispatch(new AddTodo({
      id: id,
      description:description,
      isCompleted:isCompleted
    }))
  }

  ngOnInit(): void {
  }
}
