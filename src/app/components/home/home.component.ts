import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router:Router){

  }
  // navigateToAbout():void{
  //   console.log("about")
  //   this.router.navigate(['/about']);
  // }
}
