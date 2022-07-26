import { Component, OnInit } from '@angular/core';
import { Libro } from '../common/types';
import { HttpClient} from '@angular/common/http';
import { LibrosseleccionadosService } from '../librosseleccionados.service';
@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit {

  libros: any;
  errorHttp: boolean = false;
  cargando: boolean = false;


  constructor(private http:HttpClient, public librosseleccionados:LibrosseleccionadosService) {

  }

  ngOnInit() {
    this.cargando = true;
    this.cargarLista();
  }


  cargarLista(){

    this.http.get('assets/json/lista-de-libros.json').subscribe(
      { 
        next:respuesta => { this.libros = respuesta; this.cargando = false; } ,
        error:respuesta => { this.errorHttp = true }
    }
    )

  }

  agregarLibro(_libro:Libro){
    this.librosseleccionados.agregarLibros(_libro);
  }


}
