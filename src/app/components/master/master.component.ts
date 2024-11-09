import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RouterOutlet, RolesComponent, DesignationComponent, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent implements OnInit{
  http = inject(HttpClient);
  userList: any[] = [];

  ngOnInit(): void {
    this.getMockApi();
  }
  getMockApi() {
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((res: any) => {
        this.userList = res;
        console.log(res);
      }
      )
  }

  // title = 'counter-app';
  // firstName: string = "Darshan";
  // angularVersion: number = 100;
  // currentDate: Date = new Date();
  // radioInputType: string = "radio";
  // showAlert() {
  //   console.log("alert");
  //   alert("alert")
  // }
  // showMessage(message: string) {
  //   console.log("msg", message);
  //   alert(`Message - ${message}`)
  // }
  showDiv:boolean=true;

  toggleDiv(value:boolean){
    this.showDiv = value;
  }

  cities:any[]=[
    'c1','c2','c3'
  ]

userSelectedValue:string="";

  selectedValue(event:any){
    this.userSelectedValue=event?.target.value;
    console.log(event?.target.value);
  }

  myType:string="text";
  myPlaceholder:string="your custom placeholder here"

  activeTab: string = "roles";
  changeTabName(newTabName: string) {
    this.activeTab = newTabName;
  }


}
