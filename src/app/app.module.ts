import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Corrected line
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ResidenceDetailsComponentComponent } from './residences/residence-details-component/residence-details-component';
import { ResidencessComponentComponent } from './residences/residencess-component/residencess-component.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'


import { AddProductComponent } from './residences/add-residence-component/add-residence-component.component';
import { UpdateResidenceComponent } from './residences/update-residence/update-residence.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponentComponent,
    NotFoundComponentComponent,
    ResidenceDetailsComponentComponent,
    ResidencessComponentComponent,
    AddProductComponent,
    UpdateResidenceComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,  // Ensure FormsModule is here
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
