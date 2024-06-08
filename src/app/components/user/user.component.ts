import { Component } from '@angular/core';
import { AppServiceService } from '../../app-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  users:any
  constructor(private service:AppServiceService) { }
  
  ngOnInit(){
    this.getUserList()
  }
  getUserList(){
       this.service.getUser().subscribe((data)=>{
        console.log("User List",data);
        this.users=data;
       })
  }
}
