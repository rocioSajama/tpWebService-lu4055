import { Component, OnInit } from '@angular/core';
import { Moneda } from './../../models/moneda';
import { MonedaService } from './../../services/moneda.service';


@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  from:string;
  to:string;
  a:any;


  constructor(private monedaService:MonedaService) {
  }

  ngOnInit(): void {
  }

  public convertirMoneda(from: string, to: string, amount: HTMLInputElement) {
    return this.monedaService.convertir(this.from, this.to, amount.valueAsNumber).subscribe(
      (result) => {
        console.log(result);
        this.a = result;
      },
      (error) => {
        {alert("Error en la peticion");}
      }
      );
  }

}
