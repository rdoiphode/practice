import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SubjectsComponent } from './subjects/subjects.component';
import { StoreModule } from '@ngrx/store';
import { AuthModule} from './auth.module';
import { AuthService } from './auth.service';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { reducers } from './reducers/intex';


@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
  //   StoreModule.forRoot(reducers, {
  //     runtimeChecks : {
  //         strictStateImmutability: true,
  //         strictActionImmutability: true,
  //         strictActionSerializability: true,
  //         strictStateSerializability:true
  //     }
  // }),
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
