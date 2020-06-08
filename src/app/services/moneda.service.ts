import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  constructor(private _http: HttpClient) { }

  public convertir(from: string, to: string, amount: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'a0879b53a5msh74e5651284cd745p1025c2jsn43c4eaff2f70',
      }),
    };
    return this._http.get(`https://fixer-fixer-currency-v1.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`,httpOptions);
    
  }
}


