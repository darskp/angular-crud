import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testd',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './testd.component.html',
  styleUrl: './testd.component.css'
})
export class TestdComponent {
myName:string="Darshan";
userName:string=""
isBtnHidden:boolean=false;
numbers:any[]=[1,2,3,4,5]

  handleOnclick(){
    alert("hi")
  }
  handleClearUsername(){
    this.userName=""
  }
  handlebtnOnclick(){
    this.isBtnHidden=!this.isBtnHidden;
  }

}
