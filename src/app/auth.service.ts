import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user.module';

@Injectable()
export class AuthService{

    constructor(private http:HttpClient){

    }

    login(email:string, password:string):Observable<user>{
        return this.http.post<user>('/api/login',{email,password})
    }
} 