import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from '../../contants/api.contants';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(
		private http: HttpClient
	) { }

	checkLogin(username: string, password: string): Observable<any> {
		return this.http.get(API.ENDPOINT + "account/login?username=" + username + "&password=" + password);
	}

}
