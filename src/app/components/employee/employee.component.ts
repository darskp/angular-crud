import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor(private https: HttpClient) { }
  userList: any[] = []

  getUsers() {
    this.https.get<any>(environment.Jsonplaceholder_API)
      .subscribe((res: any) => {
        this.userList = res;
      }
      ),
      (err: any) => {
        console.log(err);
      }
  }

}
