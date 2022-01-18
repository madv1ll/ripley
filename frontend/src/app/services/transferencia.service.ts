import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  URL_API = 'http://localhost:3000/persona'

  datosTransferencia : Transferencia = {
    rut_destinatario: "",
    monto: 0,
  }

  transferencia: Transferencia[] = []
  constructor(private http: HttpClient) { }
  
  //-------------------Transferencia
  crearTransferencia(transferencia: Transferencia){
    return this.http.post(this.URL_API+'/nuevaTransferencia',transferencia)
  }
}
