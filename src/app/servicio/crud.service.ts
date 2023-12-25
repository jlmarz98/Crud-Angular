import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  API: string='http://localhost/empleados/';
  constructor(private clienteHttp:HttpClient) { }

  agregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API + "?insertar=1", datosEmpleado);
}

obtenerEmpleado(){
  return this.clienteHttp.get(this.API);
}

borrarEmpleado(id:any): Observable<any>{
  return this.clienteHttp.get(this.API+"?borrar="+id);

}

obtenerParaEditarEmpleado(id:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?consultar="+id);

}
modificarEmpleado(id:any, datosEmpleado:any):Observable<any>
{
return this.clienteHttp.post(this.API+"?actualizar="+id, datosEmpleado)
}

}
