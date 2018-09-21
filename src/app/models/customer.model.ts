export class Customer {
	public username: string;
	public password: string;
	public fullName: string;
	public gender: number;
	public birthday: string;
	public address: string;
	public phone: string;
	public email: string;

	constructor(username: string, password: string, fullName: string, gender: number, birthday: string, address: string, phone: string, email: string) {
		this.username = username;
		this.password = password;
		this.fullName = fullName;
		this.gender = gender;
		this.birthday = birthday;
		this.address = address;
		this.phone = phone;
		this.email = email;
	}
}