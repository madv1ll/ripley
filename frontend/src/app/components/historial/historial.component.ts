import { Component, OnInit } from '@angular/core';
import { DestinatarioService } from 'src/app/services/destinatario.service';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(public transferenciaService: TransferenciaService, public destinatarioService: DestinatarioService) { 
  }

  ngOnInit(): void {
    this.getTransferencias()
  }
  ngOnDestroy():void{
    this.destinatarioService.limpiarDestinatario();
  }
  
  getTransferencias(){
    this.transferenciaService.getTransferencia().subscribe(
      res => {const data = Object.assign(res)
        this.transferenciaService.transferencia = data,
        this.destinatarioService.listarDestinatario(data[0].rut_destinatario).subscribe(
          res => this.destinatarioService.datosDestinatario = res,
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  
  }
}
