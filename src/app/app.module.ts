import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEmpleadosComponent } from './componentes/agregar-empleados/agregar-empleados.component';
import { EditarEmpleadosComponent } from './componentes/editar-empleados/editar-empleados.component';
import { ListarEmpleadosComponent } from './componentes/listar-empleados/listar-empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadosComponent,
    EditarEmpleadosComponent,
    ListarEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
