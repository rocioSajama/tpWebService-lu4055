import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CoctelService {

  constructor(private _http: HttpClient) { }


  public cargarCocteles (categoria:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-Host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-Key": "309809eb42msh04027217141abccp1efc66jsn9bfdc2d9e128"
      }),
      params:{
        c: categoria,
      }
    };
    return this._http.get("https://the-cocktail-db.p.rapidapi.com/filter.php", httpOptions);
  }

  /*
  
  public cargarIngredientes (id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-Host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-Key": "309809eb42msh04027217141abccp1efc66jsn9bfdc2d9e128"
      }),
      params:{
        i: id,
      }
    };
    return this._http.get("https://the-cocktail-db.p.rapidapi.com/lookup.php", httpOptions);
  }*/
}