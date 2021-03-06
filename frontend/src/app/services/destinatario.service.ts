import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Destinatario } from "../models/destinatario";
import { NgForm } from '@angular/forms';
import { Transferencia } from '../models/transferencia';
import { Banco } from '../models/banco';

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService {

  datosDestinatario: Destinatario = {
                                      nombre: "",
                                      rut: "",
                                      correo: "",
                                      telefono: 0,
                                      banco: "",
                                      tipo_cuenta: "",
                                      numero_cuenta: 0}
  destinatario: Destinatario[] = []
  banco: Banco[] = [] 

  constructor(private http: HttpClient) { 
  }

  URL_BANCO = 'https://bast.dev/api/banks.php'

  //se obtienen todos los destinatarios
  getDestinatario(){
    return this.http.get<Destinatario[]>('https://sv-ripley.herokuapp.com/persona/contactos')
  }
  //se crea un destinatario
  crearDestinatario(destinatario: Destinatario){
    return this.http.post('https://sv-ripley.herokuapp.com/persona/nuevoDestinatario',destinatario)
  }
  //listar un destinatario
  listarDestinatario(rut: string){
    return this.http.get<Destinatario>('https://sv-ripley.herokuapp.com/persona/contactos/'+rut)
  }
  getBanco(){
    return this.http.get(this.URL_BANCO)
  }
  //limpiardestinatario
  limpiarDestinatario(){
    this.datosDestinatario = { nombre: "",
                          rut: "",
                          correo: "",
                          telefono: 0,
                          banco: "",
                          tipo_cuenta: "",
                          numero_cuenta: 0}
  }
}