import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailChaussureComponent } from './components/detail-chaussure/detail-chaussure.component';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import { EditChaussureComponent } from './components/edit-chaussure/edit-chaussure.component';
//import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ChaussureComponent,
    DetailChaussureComponent,
    AddChaussureComponent,
    EditChaussureComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    //ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
