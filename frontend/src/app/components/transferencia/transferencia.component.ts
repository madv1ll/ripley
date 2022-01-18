import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DestinatarioService } from "../../services/destinatario.service";

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  constructor(public destinatarioService: DestinatarioService) { }
  
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
  destinatarioObj = {}
  encontro = "";
  listarDestinatario(){
    this.destinatarioService.listarDestinatario(this.buscar).subscribe(
      res => {this.destinatarioService.datosDestinatario = res,
              console.log("hola"),
              this.readonly = false;
      },
      err => this.encontro = "no se encontraron destinatarios con el RUT ingresado"
    )
  }
}
