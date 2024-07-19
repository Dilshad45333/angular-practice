import { Component } from '@angular/core';
import { resolve } from 'path';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss'
})
export class PromiseComponent {

  status:any
  constructor(){
    let buyLaptop=new Promise((resolve,reject)=>{
      //resolve('promise resloved')
      //reject('promise rejected')

      if(this.DellAvailable()){
       return setTimeout(()=>{
        resolve('Dell purchased')
       },3000)
      }
      else if(this.HpAvailable()){
        return setTimeout(()=>{
          resolve('Hp purchased')
         },3000)
      }
      else{
        return setTimeout(()=>{
          reject('Laptop not available')
         },3000)
      }
   })

   buyLaptop.then(res=>{
    console.log(res)
    this.status=res
  }).catch(err=>{
    console.log(err)
    this.status=err
  })
  }

  DellAvailable(){
    return false
  }

  HpAvailable(){
    return false
  }
  
  
 
}
