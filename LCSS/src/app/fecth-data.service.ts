import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FecthDataService {
  constructor(private http: HttpClient) { }

  async getData() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    const data = await this.http.get('./assets/apiTest.json', { headers }).toPromise();
    return data;
  }
}
