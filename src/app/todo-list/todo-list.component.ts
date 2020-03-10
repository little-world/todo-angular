import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers:  [TodoService]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.reloadAll();
  }

  reloadAll() {
    this.todoService.findAll().subscribe(
      todos => this.todos = todos
    );
  }
  delete(id) {
    this.todoService.delete(id).subscribe(
      () => this.reloadAll()
    );
  }
}
