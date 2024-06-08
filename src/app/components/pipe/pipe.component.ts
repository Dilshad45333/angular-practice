import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipe } from '../../custom.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule,CustomPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
 value:string="my name is dilshad khan"
 amount:number=50
 date=new Date()
 constructor(){

 }

}
