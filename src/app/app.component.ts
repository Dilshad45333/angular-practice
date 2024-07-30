import { Component, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { CommonModule } from '@angular/common';
/**
 * AppComponent is the root component of the application.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,ChildComponent,ParentComponent,CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  /**
   * The title of the application.
   */
  title = 'angular-practice';
}
