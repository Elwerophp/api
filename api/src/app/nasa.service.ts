import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
private apiurl = 'https://api.nasa.gov/planetary/apod';
private apikey = '9y9YgkUeMw5gUfjVxv7yCxQCGTPOE1Rwk1dWqm1kWh';

  constructor(private http:HttpClient) {}
   getimageoftheday():Observable<any>{
    return this.http.get(`${this.apiurl}?api_key=${this.apikey}`)
   }

}
