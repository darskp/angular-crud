import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../model/class/client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent{
 
}
