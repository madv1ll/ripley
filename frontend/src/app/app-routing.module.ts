import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DestinatariosComponent } from './components/destinatarios/destinatarios.component';
import { HistorialComponent } from './components/historial/historial.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';

const routes: Routes = [
  { 
    path: '', component: AppComponent
  },
  { 
    path: 'historial', component: HistorialComponent
  },
  { 
    path: 'transferencia', component: TransferenciaComponent
  },
  { 
    path: 'nuevo', component: DestinatariosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }