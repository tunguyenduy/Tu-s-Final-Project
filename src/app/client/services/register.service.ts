import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from '../../contants/api.contants';

import { Customer } from '../../models/customer.model';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	constructor(
		private http: HttpClient
	) { }

	addCustomer(username:string,password:string,fullName:string,gender:number,phone:string,birthday:string,address:string,email:string): Observable<any> {
		return this.http.post(API.ENDPOINT + "customer/add", {
			username: username,
			password: password,
			fullName: fullName,
			gender: gender,
			phone: phone,
			birthDay: birthday,
			address: address,
			email: email
		});
	}
}
