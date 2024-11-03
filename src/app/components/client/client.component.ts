import { Component, inject, OnInit, signal } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../../services/client.service';
import { AsyncPipe, CommonModule, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";
import { MybtnComponent } from "../../reusableComponent/mybtn/mybtn.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe, AlertComponent, MybtnComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  constructor(private clientService: ClientService) {
  }
  clientObj: Client = new Client();
  currentDate: Date = new Date();
  getData: {
    clientList: any[],
    isLoader: boolean
  } = {
      clientList: [],
      isLoader: true
    }

  //Observable - async pipe
  userList$: Observable<any> = new Observable<any>;
  
  //signals
  firstName=signal<string>("Angular-18");

  changeFirstName(){    
    this.firstName.set((this.firstName() !== "Angular-18") ? "Angular-18" : "Reactjs");
  }

  ngOnInit(): void {
    this.loadClient()
    this.userList$ = this.clientService.testAsyncPipeTest()
  }

  loadClient() {
    this.clientService.fetchGetClient()
      .subscribe((res: any) => {
        this.getData.clientList = res.data;
        this.getData.isLoader = false;
      },
        (err) => {
          this.getData.isLoader = false;
        }
      )
  }

  handleEdit(item: Client) {
    this.clientObj = item;
  }

  handleSaveClient(dataFromChild:string) {

    console.log("data",dataFromChild);
    
    this.clientService.addUpdateClient(this.clientObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert(res.message)
          this.loadClient();
          this.clientObj = new Client();
        } else {
          alert(res.message)
        }
      }
      )
  }

  handleResetClient() {
    this.clientObj = new Client();
    this.loadClient()
  }

  handleDelete(id: number) {
   const isConfirm: Boolean = confirm("Are you sure want to delete the record?");
    if (isConfirm) {
      this.clientService.deleteClientId(id)
        .subscribe((res: any) => {
          if (res.result) {
            alert(res.message)
            this.loadClient();
          } else {
            alert(res.message)
          }
        }
        )
    }
  }

}
