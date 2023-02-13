import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  nativeElement: any;
  dateOfBirth: any;

  constructor() { }

  ngOnInit(): void {
  }

 
  

  // caluclateAge(){
  //   let birthYear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();

  //   let currentYear = new Date().getFullYear();

  //   let age  = currentYear - birthYear ;
  //   this.nativeElement.value = age
  // }

  

  sayHello(){
    console.log("Hello Angular")
  }
}
