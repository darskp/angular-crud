import { Component } from '@angular/core';
import { ClientProject } from '../../model/class/client-project';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent {
  constructor(private clientProject: ClientProject){

  }
  clientObj: ClientProject = new ClientProject();

  handleResetClient(){
    console.log("exe");
  }
}
