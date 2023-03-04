import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { noop, tap } from 'rxjs';
import { login } from './auth.action';
import { AuthService } from './auth.service';
import { AppState } from './reducers/intex';
import { user } from './user.module';

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

        this.router.navigateByUrl("admin/list");
      })
    ).subscribe(
      noop,
      ()=>alert('logging falied')
    )
  }

  getuserdata(data:any){
    console.warn(data);
    // this.login(data).subscribe((result)={
    //   console.log(result);
    // })
  }


  ngOnInit(): void {}
}
