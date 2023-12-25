import { Component } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent {
Empleados:any;

  constructor(private crudService:CrudService){
}

ngOnInit(){
this.crudService.obtenerEmpleado().subscribe(respuesta=>{
console.log(respuesta);
this.Empleados=respuesta;
})
}

borrarRegistros(id:any, iControl:any){
  console.log(id);
  console.log(iControl);
if(window.confirm("¿ Desea borroar el Registro?")){
  this.crudService.borrarEmpleado(id).subscribe((respuesta: any)=>{
    this.Empleados.splice(iControl, 1);
  })
}
}
}
