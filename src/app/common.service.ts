import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CommonService {

  baseUrl = 'http://localhost:8080';
  private url_get = '/home/getData';
  private url_set = '/home/setData';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
  }

  addName() {

  }

  getName() {
    const url = `${this.baseUrl + this.url_get}`;
    alert(url);
    return this.http.get(url);
  }

  setName(nameList) {
    const url = `${this.baseUrl + this.url_set}`;
    return this.http.post(url, nameList);
  }

}
