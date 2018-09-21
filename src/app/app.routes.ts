import { Routes } from '@angular/router';
import { ClientComponent} from './client/client.component';
import { LoginComponent} from './admin/components/login/login.component';



export const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: ClientComponent
	},
	{
		path: 'admin',
		redirectTo: 'admin/login',
		pathMatch: 'full'
	},
	{
		path: 'admin/login',
		component: LoginComponent
	}

]