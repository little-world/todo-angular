
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Login[]>  {
    return this.http.get<any>('http://localhost:8080/login')
  }

  save(login: Login) {
    return this.http.post('http://localhost:8080/login', login)
  }

  delete(id) {
    return this.http.delete('http://localhost:8080/login/' + id)
  }

}
