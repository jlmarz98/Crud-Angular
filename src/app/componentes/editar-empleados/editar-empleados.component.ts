import { Component } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import{Router,ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css']
})
export class EditarEmpleadosComponent {
  formularioDeEmpleados:FormGroup;
elId:any;
constructor( private Ruteador:Router, private activeRoute:ActivatedRoute,private crudService:CrudService, public formulario:FormBuilder, ){

  this.elId=this.activeRoute.snapshot.paramMap.get('id');
  console.log(this.elId);
  this.crudService.obtenerParaEditarEmpleado(this.elId).subscribe( respuesta=>{
    console.log(respuesta)  
    this.formularioDeEmpleados.setValue({
      nombre:respuesta[0]['nombre'],
      correo:respuesta[0]['correo']
    })
});
this.formularioDeEmpleados=this.formulario.group({
  nombre:[''],
  correo:['']
})
}
enviarDatos():any{
  console.log(this.elId);
  console.log(this.formularioDeEmpleados.value);
  this.crudService.modificarEmpleado(this.elId, this.formularioDeEmpleados.value).subscribe(()=>{
    this.Ruteador.navigateByUrl('/listar-empleados');
  })

}
}
