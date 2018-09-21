import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminModule} from './admin/admin.module';
import { ClientModule} from './client/client.module';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    ClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
