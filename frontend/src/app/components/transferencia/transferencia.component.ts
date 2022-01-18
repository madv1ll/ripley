import { Component, OnInit } from '@angular/core';
import { DestinatarioService } from "../../services/destinatario.service";

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  constructor(public destinatarioService: DestinatarioService) { }

  ngOnInit(): void {
    
  }

  getDestinatario(){
    this.destinatarioService.getDestinatario().subscribe(
      res => this.destinatarioService.destinatario = res,
      err => console.log(err)
    )
  }
}
