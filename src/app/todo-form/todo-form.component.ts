import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';
import {TodoListComponent} from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  providers:  [TodoService]
})
export class TodoFormComponent implements OnInit {
  @Input()
  todoList: TodoListComponent;

  todo = new Todo()

  constructor( private todoService: TodoService) {
  }

  ngOnInit() {}

  public save() {
    this.todoService.save(this.todo).subscribe(
      () => this.todoList.reloadAll()
    );
  }
}
