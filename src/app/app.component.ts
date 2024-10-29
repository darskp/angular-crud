import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DesignationComponent } from './components/designation/designation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RolesComponent, DesignationComponent, FormsModule, CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  }
