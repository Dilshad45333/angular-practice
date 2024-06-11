import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  firstname=signal('Dilshad')
  lastname=signal('khan')

  //fullname=this.firstname()+ ' '+this.lastname()
  fullname=computed(()=>this.firstname()+ ' '+this.lastname())

  changeFirstName(fname:any){
     this.firstname.set(fname)
     console.log('f',fname)
  }

  changeLastName(lname:any){
   this.lastname.set(lname)
  }
}
