import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent {
  @ViewChild('button', { static: true }) button!: ElementRef<HTMLButtonElement>;
  clickSubscription!: Subscription;

  ngOnInit(){
    const clickButton=fromEvent<MouseEvent>(this.button.nativeElement,'click')
    this.clickSubscription=clickButton.subscribe((event:MouseEvent)=>{
      console.log(`clicked at: (${event.clientX},${event.clientY})`)
    })
    

  }


  ngOnDestroy() {
    // Unsubscribe from the event when the component is destroyed
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
  }
}
