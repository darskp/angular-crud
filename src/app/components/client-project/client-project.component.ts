import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { ClientService } from '../../../services/client.service';
import { apiResponseModel, clientProjectList } from '../../model/interface/role';
import { MybtnComponent } from "../../reusableComponent/mybtn/mybtn.component";

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DatePipe, FormsModule, MybtnComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  // constructor(private clientService: ClientService) {
  // }
  clientService = inject(ClientService)
  clientProjectsList = signal<clientProjectList[]>([]);

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl('',
      Validators.required
    ),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl('', Validators.email,
    ),
    clientId: new FormControl('')
  })


  ngOnInit(): void {
    this.fetchAllemp();
    this.fetchClientList();
    this.GetAllClientProjects()
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
      }, (err) =>
        this.getEmployeeData.isLoader = false
      )
  }

  //GetAllClientProjects
  GetAllClientProjects() {
    this.clientService.fetchGetAllClientProjects()
      .subscribe((res: apiResponseModel) => {
        this.clientProjectsList.set(res.data)
      }, (err) =>
        console.log("err", err)
      )
  }

  fetchClientList() {
    this.clientService.fetchGetClient()
      .subscribe((res: apiResponseModel) => {
        this.getClientList.data = res.data;
        this.getClientList.isLoader = false;
      }, (err) => {
        this.getClientList.isLoader = false
      }
      )
  }

  handleSaveClientProject(role:string) {
    console.log(role);
    const formValues = this.projectForm.value;
    this.clientService.addUpdateClientProject(formValues)
      .subscribe((res: apiResponseModel) => {
        if (res.result) {
          alert(res.message)
        } else {
          alert(res.message)
        }
      })
  }

  get clientProjects() {
    return this.clientProjectsList();
  }


}
