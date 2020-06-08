import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from './../../services/horoscopo.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  a: any;
  fecha:string;

  constructor(private horoscopoService:HoroscopoService) {
  }


  ngOnInit(): void {
  }

  mostarHoroscopo(signo: HTMLSelectElement,fecha:string){
    this.horoscopoService.listHoroscopo(signo.value, this.fecha).subscribe(
      (resultado) => {
        this.a = resultado;
        console.log(this.a)
      },
      (error) => {
        console.log("ERROR" , error);
      }
      )
  }
}
