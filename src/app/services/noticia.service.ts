import { Injectable } from '@angular/core';

// Importamos los componentes que vamos a usar
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor (private _http: HttpClient) { }

  public listNoticias (categoria:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
        "x-rapidapi-key": "309809eb42msh04027217141abccp1efc66jsn9bfdc2d9e128"
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category=" +categoria,httpOptions);
  }
}
