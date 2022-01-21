import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DestinatariosComponent } from './components/destinatarios/destinatarios.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { AppRoutingModule } from './app-routing.module';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinatariosComponent,
    TransferenciaComponent,
    HistorialComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }