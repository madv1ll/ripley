import { Component, OnInit, OnDestroy } from '@angular/core';
import { DestinatarioService } from "../../services/destinatario.service";
import { NgForm, ValidationErrors } from "@angular/forms";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.component.html',
  styleUrls: ['./destinatarios.component.css']
})
export class DestinatariosComponent implements OnInit {
  form
  constructor(public destinatarioService: DestinatarioService, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      rut: ['',[Validators.required,Validators.pattern("[0-9]+-[0-9kK]{1}$")]],
      nombre: ['',Validators.required],
      correo: ['',Validators.email],
      telefono: ['', [Validators.pattern("[0-9]{9}"), Validators.maxLength(9), Validators.minLength(9)]],
      banco: ['', Validators.required],
      tipo_cuenta: ['', Validators.required],
      numero_cuenta: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.obtenerBancos()
  }
  ngOnDestroy():void{
    this.destinatarioService.limpiarDestinatario();
  }
  submit() {
    if (this.form.valid) {
      this.destinatarioService.datosDestinatario = {
        nombre: this.form.controls['nombre'].value,
        rut: this.form.controls['rut'].value,
        correo: this.form.controls['correo'].value,
        telefono: this.form.controls['telefono'].value,
        banco: this.form.controls['banco'].value,
        tipo_cuenta: this.form.controls['tipo_cuenta'].value,
        numero_cuenta: this.form.controls['numero_cuenta'].value}
        alert("Destinatario Agregado con éxito")
        this.addDestinatario(this.form)
    }
    else{
      if(this.form.controls['rut'].invalid){alert('rut invalido')}
      else 
      if(this.form.controls['nombre'].invalid){alert('nombre invalido')}
      else
      if(this.form.controls['correo'].invalid){alert('correo invalido')}
      else
      if(this.form.controls['telefono'].invalid){alert('telefono invalido')}
      else
      if(this.form.controls['banco'].invalid){alert('banco invalido')}
      else
      if(this.form.controls['numero_cuenta'].invalid){alert('numero cuenta invalido')}
    }
  }
  addDestinatario(form: FormGroup){
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