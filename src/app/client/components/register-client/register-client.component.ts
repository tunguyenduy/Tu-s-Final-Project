import { Component, OnInit } from '@angular/core';
import { Customer } from './../../../models/customer.model';
import { RegisterService } from './../../services/register.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  private subscription: Subscription;

	constructor(
		public registerService: RegisterService,
		public router: Router
	) { }

	ngOnInit() {
	}

	public username: string;
	public password: string;
	public confirmPassword: string;
	public fullName: string;
	public gender: number;
	public birthday: string;
	public address: string;
	public phone: string;
	public email: string;

	public isValidUserName: boolean;


	onSignUp() {
		this.subscription = this.registerService.addCustomer(this.username,this.password,this.fullName,this.gender,this.birthday,this.address,this.phone,this.email).subscribe(
			data => {
				if (data) {
					console.log(data);
					this.router.navigate( ['client/login']);
				} 
			})
	}

	checkUsername(event) {
		let username = event.target.value;
		if (username.length < 5 || username.length > 20) {
			this.isValidUserName = true;
		} else {
			this.isValidUserName = false;
		}
	}
}
