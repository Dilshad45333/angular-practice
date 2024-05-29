import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  standalone: true,
  imports: [],
  templateUrl: './event-bind.component.html',
  styleUrl: './event-bind.component.scss'
})
export class EventBindComponent {
  msg=''
showMsg(){
this.msg="This is me"
}
}
