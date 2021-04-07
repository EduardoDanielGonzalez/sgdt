import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  
  public myDatas:any;

  constructor() { }
  
  setValor(myData) {
    this.myDatas = myData;
  }
  
  getDatas() {
    return this.myDatas;
  }
  
}
