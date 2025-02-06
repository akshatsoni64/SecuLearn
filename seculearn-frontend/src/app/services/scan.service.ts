import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  apiUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  scan(ip: string){
    return this.http.post(`${this.apiUrl}scan/`, {target: ip});
  }
}
