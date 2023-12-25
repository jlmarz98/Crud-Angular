import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleados',
  templateUrl: './agregar-empleados.component.html',
  styleUrls: ['./agregar-empleados.component.css']
})
export class AgregarEmpleadosComponent {

formularioDeEmpleados:FormGroup;

constructor(public formulario:FormBuilder, private crudService:CrudService, private Ruteador:Router){
  this.formularioDeEmpleados= this.formulario.group({
    nombre:[''],
    correo:['']
  })
}


  enviarDatos():any{

    console.log("Me presionaste");
    console.log(this.formularioDeEmpleados.value);

    this.crudService.agregarEmpleado(this.formularioDeEmpleados.value).subscribe(respuesta=>{
    this.Ruteador.navigateByUrl('/listar-empleados');
  });
  
}
}