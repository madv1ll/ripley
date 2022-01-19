import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(public transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.getTransferencias()
  }
  getTransferencias(){
    this.transferenciaService.getTransferencia().subscribe(
      res => this.transferenciaService.transferencia = res,
      err => console.log(err)
    )
  }
}
