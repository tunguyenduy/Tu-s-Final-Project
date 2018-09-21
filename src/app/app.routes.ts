import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent} from './client/client.component';
import { AdminComponent} from './admin/admin.component';
import { HomeClientComponent} from './client/components/home-client/home-client.component';
import { LoginClientComponent} from './client/components/login-client/login-client.component';
import { RegisterClientComponent} from './client/components/register-client/register-client.component';
import { LoginAdminComponent} from './admin/components/login-admin/login-admin.component';


export const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'client',
		pathMatch: 'full'
	},
	{
		path: 'client',
		component: ClientComponent,
		children: [
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			},
			{
				path: 'home',
				component: HomeClientComponent
			},
			{
				path: 'login',
				component: LoginClientComponent
			},
			{
				path: 'register',
				component: RegisterClientComponent
			}
		]
	},
	{
		path: 'admin',
		component: AdminComponent,
		children: [
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			},
			{
				path: 'login',
				component: LoginAdminComponent
			}
		]
	}

]
@NgModule({
  imports:[RouterModule.forRoot(appRoutes],
  exports:[RouterModule]
})
export class AppRoutingModule {
  
}