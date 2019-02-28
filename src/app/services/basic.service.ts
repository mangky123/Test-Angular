import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  private aof:number

  constructor() { 
    this.aof = 5
  }

  get getAof(){
    return this.aof
  }

  EditAof(newAof : number) {
    this.aof = newAof
  }
}
