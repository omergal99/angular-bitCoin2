import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public store(key, value) {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
  }

  public load(key) {
    var str = localStorage.getItem(key)
    return JSON.parse(str)
  }

}
