import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {
  url : string = "http://localhost:3000"
  constructor(private _http:HttpClient) { }

  GetQuestion(){
    return this._http.get(this.url+"/questions");
  }

  GetFillQuestion(){
    return this._http.get(this.url+"/f_questions");
  }
}
