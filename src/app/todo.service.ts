import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]>  {
    return this.http.get<any>('http://localhost:8080/todo')
  }

  save(todo: Todo) {
    return this.http.post('http://localhost:8080/todo', todo)
  }

  delete(id) {
    return this.http.delete('http://localhost:8080/todo/' + id)
  }

}
