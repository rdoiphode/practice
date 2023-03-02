import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
subjectuser: any;
  

constructor(){}

ngOnInit(){
  const subjectuser = new Subject<number>();

  // subject.subscribe(d => console.log(d));
  // subject.subscribe(d => console.log(d));
  // subject.subscribe(d => console.log(d));

  // subject.next(Math.random());

  subjectuser.subscribe((number)=>{
    console.log(number);
  });
  this.subjectuser.next(100)
}}
