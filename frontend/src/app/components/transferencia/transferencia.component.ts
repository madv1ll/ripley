import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transferencia } from 'src/app/models/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { DestinatarioService } from "../../services/destinatario.service";

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  constructor(public destinatarioService: DestinatarioService, public transferenciaService: TransferenciaService) { }
  
  readonly = true;
  
  ngOnInit(): void {
    
  }

  getDestinatario(){
    this.destinatarioService.getDestinatario().subscribe(
      res => this.destinatarioService.destinatario = res,
      err => console.log(err)
    )
  }
  
  buscar: string = ""
  destinatarioObj = {rut:""}
  encontro = "";
  monto: number = 0;
  listarDestinatario(){
    this.destinatarioService.listarDestinatario(this.buscar).subscribe(
      res => {this.destinatarioService.datosDestinatario = res,
              this.readonly = false
      },
      err => this.encontro = "no se encontraron destinatarios con el RUT ingresado"
    )
  }


  transferir(){
    var transferencia:Transferencia = {rut_destinatario: this.buscar,monto: this.monto}
      this.transferenciaService.crearTransferencia(transferencia).subscribe()
    }
}
