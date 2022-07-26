import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { DetallesComponent } from './detalles/detalles.component';

import { LibrosseleccionadosService } from './librosseleccionados.service';

const routes: Routes = [
  {path: 'lista-libros', component:ListaDeLibrosComponent},
  {path: 'acerca-de', component:AcercaDeComponent},
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'detalles/:libroId', component:DetallesComponent},
  {path:'', pathMatch:'full' , redirectTo: 'lista-libros'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
