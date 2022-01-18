import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DestinatariosComponent } from './components/destinatarios/destinatarios.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { AppRoutingModule } from './app-routing.module';
import { HistorialComponent } from './components/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinatariosComponent,
    TransferenciaComponent,
    HistorialComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }