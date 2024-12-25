import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetapiComponent } from '../getapi/getapi.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TruncatePipePipe } from '../../pipe/truncate-pipe.pipe';

@Component({
  selector: 'app-testd',
  standalone: true,
  imports: [TruncatePipePipe,FormsModule, CommonModule, GetapiComponent, RouterLink, RouterOutlet],
  templateUrl: './testd.component.html',
  styleUrl: './testd.component.css'
})
export class TestdComponent {
  gender: any[] = [
    { id: 1, gender: "Male" },
    { id: 2, gender: "Female" }
  ]
  selectedGender:string="Male"

  //task2
  product:any={
    "mobile1": ['m1', 'm2', 'm3'],
    "mobile2": ['m2', 'm3', 'm5'],
    "mobile3": ['m2', 'm3', 'm5'],
  }
  allProd = Object.keys(this.product);

  selectedProdName: string ="";
  selectCategory(category: string): void {
    this.selectedProdName = category; 
  }

  //task 3
  hasHideDiv1:boolean=false;
  onChangeToggleDiv1(isshow:string){
    isshow === 'show' ? this.hasHideDiv1=false : this.hasHideDiv1=true
  }

  hasHideDiv2: boolean = false;
  onChangeToggleDiv2(){
    this.hasHideDiv2=!this.hasHideDiv2;
  }

  number1:string='';
  number2: string = '';
  hasHideDiv3:boolean=false;
}
