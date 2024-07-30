import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  /**
   * The data of the child receiving from parent component.
 */
@Input() data: string='';
 /**
   * The dataEmitter of the child sending to parent component.
 */
@Output() dataEmitter: EventEmitter<string> = new EventEmitter<string>();

/**
   * A method to send the dataEmitter event from child component to parent.
   * @returns The title of the application.
   */
sendData(){
  console.log(this.data);
  this.dataEmitter.emit('Hello from Child Component');
}
}
