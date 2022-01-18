import { Component, OnInit } from '@angular/core';
import { DestinatarioService } from 'src/app/services/destinatario.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(public destinatarioService: DestinatarioService) { }

  ngOnInit(): void {
    this.getDestinatario()
  }
  getDestinatario(){
    this.destinatarioService.getDestinatario().subscribe(
      res => this.destinatarioService.destinatario = res,
      err => console.log(err)
    )
  }
}
