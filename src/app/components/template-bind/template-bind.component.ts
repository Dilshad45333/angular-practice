import { Component } from '@angular/core';

@Component({
  selector: 'app-template-bind',
  standalone: true,
  imports: [],
  templateUrl: './template-bind.component.html',
  styleUrl: './template-bind.component.scss'
})
export class TemplateBindComponent {

  getInputInfo(inputInfo: any){
    console.log(inputInfo)

  }
}
