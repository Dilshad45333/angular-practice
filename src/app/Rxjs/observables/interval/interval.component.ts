import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent {
   time=0
  ngOnInit(){
    // const broadcastVideo=interval(1000)
    // broadcastVideo.subscribe(res=>{
    //   console.log(res)
    // })

    const t=timer(2000,10000)
    t.subscribe(res=>{
      console.log(res)
    this.time=res
    })
  }
}
