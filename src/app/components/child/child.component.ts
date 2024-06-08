import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
@Input() data: string='';
@Output() dataEmitter: EventEmitter<string> = new EventEmitter<string>();

sendData(){
  console.log(this.data);
  this.dataEmitter.emit('Hello from Child Component');
}
}
