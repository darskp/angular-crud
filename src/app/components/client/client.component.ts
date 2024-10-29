import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../../services/client.service';
import { CommonModule } from '@angular/common';
import { apiResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  constructor(private clientService: ClientService) {
  }
  clientObj: Client = new Client();
  getData: {
    clientList: any[],
    isLoader: boolean
  } = {
      clientList: [],
      isLoader: true
    }

  ngOnInit(): void {
    this.loadClient()
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

  handleSaveClient() {
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
