import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8090/user-portal/users';

  fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
  {id: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
  {id: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
  {id: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
];

  getUsers() {
   // return Observable.of(fakeUsers).delay(5000);
  // users_list
    // const users_list = this.http.get<User[]>(this.baseUrl);
   // console.log('users_list');
   // console.log(fakeUsers);
     return this.fakeUsers;
  }

  getUserById(id: number) {
    //return this.http.get<User>(this.baseUrl + '/' + id);
    return this.fakeUsers[id - 1];
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
