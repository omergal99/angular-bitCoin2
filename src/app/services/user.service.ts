import { Injectable } from '@angular/core';
import User from '../models/User';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  usersSubject = new BehaviorSubject<User[]>([]);
  userSubject = new BehaviorSubject<User>(null);
  USER_KEY = 'user-angular';

  constructor(private storageService:StorageService) { }

  public getUser() {
    var currUser = this.storageService.load(this.USER_KEY);
    this.userSubject.next(currUser);
  }

}
