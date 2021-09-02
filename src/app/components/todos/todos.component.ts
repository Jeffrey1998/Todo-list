import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  inputTodo:string = '';

  constructor() { }

  ngOnInit(): void {

    // List of pre defined todo's
    this.todos = [
      {
      description: "first Todo",
      isCompleted: false
      },
      {
        description: "second Todo",
        isCompleted: false
      },
      {
        description: "thrid Todo",
        isCompleted: false
      },
    ]
  }

  // Change the value of isCompleted
  toggleIsCompleted(id) {
    this.todos.map((v, i) => {
      if (i == id) v.isCompleted = !v.isCompleted;

      return v;
    })
  }

  // Delete the todo
  deleteTodo(id) {
    this.todos = this.todos.filter((v, i) => i !== id)
  }


  // function add Todo
  addTodo() {
    // If nothing is entered, an alert is given
    if(this.inputTodo == '') {
      window.alert('please enter something...');
    } else {
      // Todo is being added to the list of todo's
      this.todos.push({
        description: this.inputTodo,
        isCompleted: false
      })
      this.inputTodo = '';
    }
  }
}
