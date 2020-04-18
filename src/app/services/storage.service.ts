import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  store(key, any) {
    localStorage[key] = JSON.stringify(any);
  }
  
  load(key) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
  }
}
