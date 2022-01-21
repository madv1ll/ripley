import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  datosTransferencia : Transferencia = {
    rut_destinatario: "",
    monto: 0,
  }

  transferencia: Transferencia[] = []
  constructor(private http: HttpClient) { }
  
  //-------------------Transferencia
  crearTransferencia(transferencia: Transferencia){
    return this.http.post('https://sv-ripley.herokuapp.com/persona/nuevaTransferencia',transferencia)
  }

  getTransferencia(){
    return this.http.get<Transferencia[]>('https://sv-ripley.herokuapp.com/persona/historial')
  }

  limpiarTransferencia(){
    this.datosTransferencia = {
      rut_destinatario: "",
      monto: 0,
    }
  }
}