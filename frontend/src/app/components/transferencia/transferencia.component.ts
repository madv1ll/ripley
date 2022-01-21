import { Component, OnInit} from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { DestinatarioService } from "../../services/destinatario.service";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  formRut
  formMonto
  constructor(public destinatarioService: DestinatarioService, public transferenciaService: TransferenciaService, private formBuilder: FormBuilder) { 
    this.formRut = formBuilder.group({
      rut: ['',[Validators.required,Validators.pattern("^[0-9]+-[0-9kK]{1}$")]]
    })
    this.formMonto = formBuilder.group({
      monto: ['', [Validators.required, Validators.pattern('[0-9]{1,6}')]]
    })
  }
  
  readonly = true;
  
  ngOnInit(): void {
  }
  ngOnDestroy():void{
    this.destinatarioService.limpiarDestinatario();
  }

  submit() {
    if (this.formRut.valid) {
      this.buscar = this.formRut.controls['rut'].value
      this.listarDestinatario()
    }
    else{
      if(this.formRut.controls['rut'].value == ''){
        alert("Debe ingresar RUT")
      }else{
        alert("Rut inválido, formato: 99999999-K")
      }
    }
  }
  submitMonto(){
    if (this.formMonto.valid) {
      if (this.formMonto.controls['monto'].value > 0){
        this.monto = this.formMonto.controls['monto'].value
        this.transferir()
      }else{
        alert("El monto debe ser mayor a 0")
        return
      }
    }
    else{
      alert("Monto inválido")
      console.log(this.formMonto.controls['monto'].value)
    }
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
        res => {if(res == null){
                  this.encontro = "No se encontraron destinatarios con el RUT ingresado"
                }else{
                    this.destinatarioService.datosDestinatario = res
                    this.readonly = false
                  }  
      },
      err => console.log(err)
    )
  }
  transferir(){
      var transferencia:Transferencia = {rut_destinatario: this.destinatarioService.datosDestinatario.rut,monto: this.monto}
      this.transferenciaService.crearTransferencia(transferencia).subscribe(res => {
        window.alert("Transferencia realizada con éxito!")
        this.destinatarioService.limpiarDestinatario()
        this.transferenciaService.limpiarTransferencia()
        this.formRut.reset()
        this.formMonto.reset()
      })
      

    }
}
