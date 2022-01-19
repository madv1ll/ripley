import { Component, OnInit } from '@angular/core';
import { DestinatarioService } from "../../services/destinatario.service";
import { NgForm } from "@angular/forms";

import { Banco } from '../../models/banco';

@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.component.html',
  styleUrls: ['./destinatarios.component.css']
})
export class DestinatariosComponent implements OnInit {

  constructor(public destinatarioService: DestinatarioService) { }

  ngOnInit(): void {
    this.obtenerBancos()
  }

  addDestinatario(form: NgForm){
    this.destinatarioService.crearDestinatario(form.value).subscribe(
      res => form.reset(),
      err => console.log(err)
    )
    console.log(form.value)
  }
  obtenerBancos(){
    this.destinatarioService.getBanco().subscribe(
      res => {
        const data = Object.assign(res)
        this.destinatarioService.banco = data.banks
      },
      err => console.log(err)
    )
  }
}