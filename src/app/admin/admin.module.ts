import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent]
})
export class AdminModule { }
