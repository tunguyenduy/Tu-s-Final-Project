import { Routes } from '@angular/router';
import { IndexComponent} from './components/index/index.component';
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';


import { AuthGuard } from './guards/auth.guard';



export const clientRoutes: Routes = [
	{
		path: 'home',
		component: IndexComponent,
		outlet: 'clientRouter'
	},
	{
		path: 'login',
		component: LoginComponent,
		outlet: 'clientRouter'
	},
	{
		path: 'register',
		canActivate: [AuthGuard],
		component: RegisterComponent,
		outlet: 'clientRouter'
	},
	

]