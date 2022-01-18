import { Component, OnInit } from '@angular/core';
import { DestinatarioService } from "../../services/destinatario.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.component.html',
  styleUrls: ['./destinatarios.component.css']
})
export class DestinatariosComponent implements OnInit {

  constructor(public destinatarioService: DestinatarioService) { }

  ngOnInit(): void {
  }

  addDestinatario(form: NgForm){
    this.destinatarioService.crearDestinatario(form.value).subscribe(
      res => form.reset(),
      err => console.log(err)
    )
    console.log(form.value)
  }
}
