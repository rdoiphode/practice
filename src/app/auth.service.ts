import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user.module';

@Injectable()
export class AuthService{

   url="https://jsonplaceholder.typicode.com/todos";

    constructor(private http:HttpClient){}
 

    login(email:string, password:string): Observable<user> {
        return this.http.post<user>(this.url, {email,password});
    }
    
} 