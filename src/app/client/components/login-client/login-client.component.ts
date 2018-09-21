import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {

  private subscription: Subscription;

	private isLoginFail: boolean = false;

	constructor(
		public loginService: LoginService,
		public router: Router
	) { }

	ngOnInit() {

	}

	onLogin(username: string, password: string) {
		this.subscription = this.loginService.checkLogin(username, password).subscribe(
			data => {
				if (data) {
					localStorage.setItem('username', username);
					this.router.navigate(['client/home']);
					location.reload();
				} else {
					this.isLoginFail = true;
				}
			})
	}

}
