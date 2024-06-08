import { Component, ElementRef, HostBinding, HostListener, Renderer2, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { HooksComponent } from '../hooks/hooks.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,CommonModule,HooksComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentData:string='DIlshad';
  message: string = '';
  @ViewChild('box') box!:ElementRef
  constructor(private renderer:Renderer2){
    console.log('Parent constructor called');
  }

  ngAfterViewInit(){
    // this.box.nativeElement.style.background='blue'
    // this.box.nativeElement.style.color='white'
    this.renderer.setStyle(this.box.nativeElement,'background','red')
    this.renderer.setStyle(this.box.nativeElement,'color','white')
    this.renderer.addClass(this.box.nativeElement,'myClass')
    this.renderer.setAttribute(this.box.nativeElement,'title','this is my name')

  }
  receiveData(data: string) {
    this.message = data;
  }

  toggleMessage() {
    this.message = this.message === 'Hello, Angular!' ? 'Hello, World!' : 'Hello, Angular!';
  }
  
  @HostBinding('style.background') bgColor='green'
  @HostListener('click') myClick(){
   alert('click me !!')
   this.bgColor='yellow'
  }

  @HostListener('window:scroll',['$event']) myScroll(){
   console.log('scrolling');
  }

}
