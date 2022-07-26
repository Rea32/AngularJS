import { RouterModule , Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AppRoutingModule } from './app-routing.module';

import { LibrosseleccionadosService } from './librosseleccionados.service';

const rutasApp:Routes = [
  { path:'lista-libros' , component: ListaDeLibrosComponent },
  { path:'acerca-de' , component: AcercaDeComponent },
  { path:'detalles/:libroId' , component: DetallesComponent },
  { path:'404' , component: Error404Component },
  { path:'' , pathMatch: 'full' , redirectTo: 'lista-libros' },
  { path:'**' , redirectTo: '404' }
]

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    ListaDeLibrosComponent,
    EncabezadoComponent,
    InicioComponent,
    Error404Component,
    DetallesComponent
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LibrosseleccionadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
