import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LanguagesComponent } from './component/languages/languages.component';
import { AboutComponent } from './component/about/about.component';
import { WorkComponent } from './component/work/work.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { PresentacionComponent } from './component/presentacion/presentacion.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { NewestudioComponent } from './component/about/newestudio.component';
import { EditestudioComponent } from './component/about/editestudio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguagesComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    PresentacionComponent,
    PortfolioComponent,
    LoginComponent,
    NewestudioComponent,
    EditestudioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
