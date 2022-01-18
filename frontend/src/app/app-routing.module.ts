import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './components/historial/historial.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';

const routes: Routes = [
  { 
    path: 'historial', component: HistorialComponent
  },
  { 
    path: 'transferencia', component: TransferenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }