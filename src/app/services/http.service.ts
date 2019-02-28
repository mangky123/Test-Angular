import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { president, marriageInterface } from 'src/app/class/interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient : HttpClient) {}

  getPresident(){
    return this.httpClient.get<president[]>('http://angulardb/getpresident')
  }
  getmarriage(){
    return this.httpClient.get<marriageInterface[]>('http://angulardb/getmarriage')
  }
}

