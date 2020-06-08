import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class HoroscopoService {

  constructor(private _http: HttpClient) { }

  public listHoroscopo (signo:string,fecha:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-Host": "horoscope5.p.rapidapi.com",
        "x-rapidapi-Key": "309809eb42msh04027217141abccp1efc66jsn9bfdc2d9e128"
      }),
      params:{
        sign: signo,
        date: fecha,
      }
    };
    return this._http.get( "https://horoscope5.p.rapidapi.com/general/daily/", httpOptions);
  }
}
