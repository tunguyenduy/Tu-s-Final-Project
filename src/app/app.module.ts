import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';



import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HomeClientComponent } from './client/components/home-client/home-client.component';
import { LoginClientComponent } from './client/components/login-client/login-client.component';
import { RegisterClientComponent } from './client/components/register-client/register-client.component';
import { HeaderComponent } from './client/components/header/header.component';
import { FooterComponent } from './client/components/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { LoginAdminComponent } from './admin/components/login-admin/login-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeClientComponent,
    ClientComponent,
    LoginClientComponent,
    RegisterClientComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
