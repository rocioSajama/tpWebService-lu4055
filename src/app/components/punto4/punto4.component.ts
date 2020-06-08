import { Component, OnInit } from '@angular/core';
import { CovidService } from './../../services/covid.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  paises: Array<string>;
  fallecidos: boolean = false;
  confirmados: boolean = false;
  recuperados: boolean = false;
  filtrado: boolean;
  filtradof: boolean = false;
  filtradoc: boolean = false;
  filtrador: boolean = false;
  a: any;
  constructor(private covidService: CovidService) {
    this.paises = new Array<string>();
  }
  ngOnInit() {
    this.filtrado = false;
    this.covidService.getCovidWorld().subscribe(
      (res) => {
        this.paises = res;
        console.log(res);
      },
      (err) => {
        console.log("error", err);
      }
    );
  }
  consulta = (country: HTMLSelectElement) => {
    this.filtrado = true;
    this.covidService.getCovidCountry(country.value).subscribe(
      (res) => {
        this.a = res;
        this.filtradoFallecido();
        this.filtradoRecuperado();
        this.filtradoCasos();
        console.log(this.a);
      },
      (err) => {
        console.log("error", err);
      }
    );
  };
 
  change = () => {
    this.fallecidos == false
      ? (this.fallecidos = true)
      : (this.fallecidos = false);
  };
  changeRecuperados = () => {
    this.recuperados == false
      ? (this.recuperados = true)
      : (this.recuperados = false);
  };
  changeCasos = () => {
    this.confirmados == false
      ? (this.confirmados = true)
      : (this.confirmados = false);
  };
  filtradoFallecido = () => {
    this.fallecidos == true
      ? (this.filtradof = true)
      : (this.filtradof = false);
  };
  filtradoRecuperado = () => {
    this.recuperados == true
      ? (this.filtrador = true)
      : (this.filtrador = false);
  };
  filtradoCasos = () => {
    this.confirmados == true
      ? (this.filtradoc = true)
      : (this.filtradoc = false);
  };
}

  

