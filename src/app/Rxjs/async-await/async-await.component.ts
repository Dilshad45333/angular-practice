import { Component } from '@angular/core';

@Component({
  selector: 'app-async-await',
  standalone: true,
  imports: [],
  templateUrl: './async-await.component.html',
  styleUrl: './async-await.component.scss'
})
export class AsyncAwaitComponent {
 data:any
  // async fun always return promise
constructor(){
  this.fetchData()
}

 async  getData(){
   return 'my async' 
  }

  fetchData(){
    this.getData().then(res => {
      console.log(res); // Expected output: "my async"
      this.data = res
    }).catch(err => {
      console.error(err); // Handle any potential errors
    })
  }

}
