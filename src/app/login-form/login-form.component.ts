import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {Login} from '../login';
import {LoginListComponent} from '../login-list/login-list.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input()
  loginList: LoginListComponent;

  login = new Login()

  constructor( private loginService: LoginService) {}

  public save() {

    this.loginService.save(this.login).subscribe(
      () => this.loginList.reloadAll()
    );
  }

  ngOnInit() {
  }

}
