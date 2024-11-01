import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { ClientService } from '../../../services/client.service';
import { apiResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, UpperCasePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  // constructor(private clientService: ClientService) {
  // }
  clientService = inject(ClientService)

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(''),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl('')
  })
  ngOnInit(): void {
    this.fetchAllemp();
    this.fetchClientList();
  }
  getEmployeeData: {
    data: any[],
    isLoader: boolean
  } = {
      data: [],
      isLoader: true
    }

  getClientList: {
    data: any[],
    isLoader: boolean
  } = {
      data: [],
      isLoader: true
    }

  fetchAllemp() {
    this.clientService.fetchGetEmployee()
      .subscribe((res: apiResponseModel) => {
        this.getEmployeeData.data = res.data;
        this.getEmployeeData.isLoader = false;
      }, (err) => {
        this.getEmployeeData.isLoader = false
      }
      )
  }

  fetchClientList(){
    this.clientService.fetchGetClient()
      .subscribe((res: apiResponseModel) => {
        this.getClientList.data = res.data;
        this.getClientList.isLoader = false;
      }, (err) => {
        this.getClientList.isLoader = false
      }
      )
  }

}
