import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _http: HttpClient) {}

  public getCovidWorld(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
        "x-rapidapi-key": "309809eb42msh04027217141abccp1efc66jsn9bfdc2d9e128",
      }),
    };
    return this._http.get(
      `https://covid-19-tracking.p.rapidapi.com/v1`,
      httpOptions
    );
  }
  public getCovidCountry(country: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
        "x-rapidapi-key": "309809eb42msh04027217141abccp1efc66jsn9bfdc2d9e128",
      }),
    };
    return this._http.get(
      `https://covid-19-tracking.p.rapidapi.com/v1/${country}`,
      httpOptions
    );
  }
}