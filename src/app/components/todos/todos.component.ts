import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
  todos!:Todo[];

  inputTodo!: string;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo - test',
        completed: false
      }
    ]
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
        
        return v;
      
    })
  }

    deleteToDo(id: number) {
      if (confirm('Are you sure')) {
      this.todos = this.todos.filter((v, i) => i !== id)
      }
    }

    addTodo() {
      if (this.inputTodo === undefined || this.inputTodo === '') {
        alert(`You can't add an empty todo`);
      } else {
        this.todos.push({
          content: this.inputTodo,
          completed: false
        });
      }
    }

  
}