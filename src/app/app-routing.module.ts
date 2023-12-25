import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadosComponent } from './componentes/agregar-empleados/agregar-empleados.component';
import { EditarEmpleadosComponent } from './componentes/editar-empleados/editar-empleados.component';
import { ListarEmpleadosComponent } from './componentes/listar-empleados/listar-empleados.component';

const routes: Routes = [

{ path: '', pathMatch:'full', redirectTo:'agregar-empleados'},
{path: 'agregar-empleados', component:AgregarEmpleadosComponent},
{path: 'editar-empleados/:id', component:EditarEmpleadosComponent},
{path: 'listar-empleados', component:ListarEmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
