import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService implements OnInit {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  getUserWithRoles() {
    return this.http.get<User[]>(this.baseUrl + 'admin/users-with-roles');
  }

  updateUserRoles(username: string, roles: string[]) {
    return this.http.post<string[]>(
      this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + roles,
      {}
    );
  }
}