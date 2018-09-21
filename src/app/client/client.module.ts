import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { clientRoutes } from './client.routes';
import { FormsModule } from '@angular/forms';

import { ClientComponent} from './client.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(clientRoutes)
  ],
  declarations: [HeaderComponent, FooterComponent, IndexComponent, LoginComponent, RegisterComponent, ClientComponent]
})
export class ClientModule { }
