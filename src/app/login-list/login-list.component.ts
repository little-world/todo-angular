import {Component, OnInit} from '@angular/core';
import {Login} from '../login';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {

  logins: Login[];

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.reloadAll();
  }

  reloadAll() {
    this.loginService.findAll().subscribe(
      lgs => {
        this.logins = lgs;
      },
      err => {
        console.log(err);
      }
    );
  }
  delete(id) {
    this.loginService.delete(id).subscribe(
      () => this.reloadAll()
    );
  }


}
