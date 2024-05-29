import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-bind',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-bind.component.html',
  styleUrl: './class-bind.component.scss'
})
export class ClassBindComponent {
  isActive: boolean = false;
  isHighlighted: boolean = false;
  color:string='red'
  toggleActive() {
    this.isActive = !this.isActive;
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
