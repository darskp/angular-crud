import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/master.service';
import { apiResponseModel } from '../../model/interface/role';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  // USING COMP
  compName: string = "Designation";
  // designationList:any = [];
  // http = inject(HttpClient);

  // ngOnInit():void {
  //   // this.masterService.getDesignation()
  //   this.http.get<apiResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  //     .subscribe(
  //       (result: apiResponseModel) => {
  //         this.designationList = result?.data; 
  //       },
  //       (error) => alert(error)
  //     );
  // }


  //USING SERVICES
  designationList: any = [];
  constructor(private masterService: MasterService) { }
  isLoader:boolean = true;
  ngOnInit(): void {
    this.fetchDes();
  }

  fetchDes() {
    this.masterService.fetchDesignation()
      .subscribe(
        (response: apiResponseModel) => {
          this.designationList = response?.data;
          this.isLoader=false;
        },
        (error) => {
          console.error(error);
          this.isLoader = false;
        }
      );
  }

}
