import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { noop, tap } from 'rxjs';
import { login } from './auth.action';
import { AuthService } from './auth.service';
import { AppState } from './intex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'myapp';

  form: FormGroup;

  constructor(
    private fb:FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store:Store<AppState>
  ){

    this.form=fb.group({
      email:[],
      password:[]
    })
  }

  LoginUser(item:any){
    console.warn(item);
  }

  login(){
    const val=this.form.value;

    this.auth.login(val.email,val.password)
    .pipe(
      tap(user=>{
        console.log(user);

        this.store.dispatch(login({user:user}));

        this.router.navigateByUrl('/admin');
      })
    ).subscribe(
      noop,
      ()=>alert('logging falied')
    )
  }

  onsubmit(){
    alert("submitted");
  }

  ngOnInit(): void {
    
  }
}
