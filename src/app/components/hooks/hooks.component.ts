import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  standalone: true,
  imports: [],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.scss'
})
export class HooksComponent {
  @Input() message:string=''
  
constructor(){
  console.log("Hooks Component Loaded");
}

ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnChanges: Changes detected.', changes);
}

ngOninit(){
  console.log('ngOnInit');
}
ngDoCheck() {
  console.log('ngDoCheck: Change detection run.');
}

ngAfterContentInit() {
  console.log('ngAfterContentInit: Content projection initialized.');
}

ngAfterContentChecked() {
  console.log('ngAfterContentChecked: Content projection checked.');
}

ngAfterViewInit() {
  console.log('ngAfterViewInit: Component views initialized.');
}

ngAfterViewChecked() {
  console.log('ngAfterViewChecked: Component views checked.');
}
ngOnDestroy() {
  console.log('ngOnDestroy: Component is about to be destroyed.');
}
}
