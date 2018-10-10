import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WPRESTService {

  loggedInUser$: Subject<any> = new Subject<any>();
  apiBase: string = 'http://vccw.test/wp-json';

  constructor(private httpService: HttpService) { }

  /// LOGIN & REGISTRATION
  login(username: string, password: string) {
    return this.httpService.doPost(`${this.apiBase}/nu/v1/login`, {
      username: username,
      password: password,
      rememeber: true
    });
  }

  logout(userId: string) {
    return this.httpService.doPost(`${this.apiBase}/nu/v1/logout`, {
      userId: userId
    }, true);
  }

  register(userData: {}) {
    return this.httpService.doPost(`${this.apiBase}/nu/v1/register`, userData);
  }

  getForm(formKey: string) {
    return this.httpService.doGet(this.getFormEndpoint(formKey));
  }

  getFormEndpoint(formKey: string) {
    switch (formKey) {
      case 'userForm': return `${this.apiBase}/nu/v1/user/form`;
      case 'productForm': return `${this.apiBase}/nu/v1/products/form`;
    }
  }

  getUserForm() {
    return this.httpService.doGet(`${this.apiBase}/nu/v1/user/form`);
  }

  getProductForm() {
    return this.httpService.doGet(`${this.apiBase}/nu/v1/products/form`);
  }

  /// POSTS
  getPosts() {
    return this.httpService.doGet(`${this.apiBase}/nu/v1/posts`);
  }

}
