import { Component, OnInit } from '@angular/core';
import { CoctelService } from './../../services/coctel.service';
import { Categoria } from './../../models/categoria';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})
export class Punto5Component implements OnInit {

  categoria:string
  coctel:Categoria;
  cocteles:Array<Categoria>;

  id:string;
  a:any;
  ingrediente:Categoria;
  ingredientes:Array<Categoria>;
  copiar:any;

  constructor(private coctelService:CoctelService) {
    this.coctel = new Categoria ();
    this.cocteles = new Array<Categoria>();
    this.ingrediente = new Categoria ();
    this.ingredientes = new Array<Categoria>();
  }

  ngOnInit(): void {
  }

  
  public mostrarCocteles(){
    this.coctelService.cargarCocteles(this.categoria).subscribe(
      (result) => {
        //es necesario que se convierta el json que
        this.cocteles = new Array<Categoria>();
        result['drinks'].forEach(element => {
          this.coctel=new Categoria();
          Object.assign(this.coctel,element);
          this.cocteles.push(this.coctel);
        });
        console.log(this.cocteles);
      },
      error => {alert("Error en la peticion");}
    )
  }

  
  /*
  public mostrarIngredientes(id: HTMLSelectElement){
    this.coctelService.cargarIngredientes(id.value).subscribe(
      (result) => {
        //es necesario que se convierta el json que
        this.ingredientes = new Array<Categoria>();
        result['drinks'].forEach(element => {
          this.ingrediente=new Categoria();
          Object.assign(this.ingrediente,element);
          this.ingredientes.push(this.ingrediente);
        });
        console.log(this.ingredientes);
      },
      error => {alert("Error en la peticion");}
    )
  }
  */

}
