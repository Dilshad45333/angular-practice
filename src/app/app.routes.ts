import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { DataBindComponent } from './components/data-bind/data-bind.component';
import { ClassBindComponent } from './components/class-bind/class-bind.component';
import { EventBindComponent } from './components/event-bind/event-bind.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'bind', component: DataBindComponent },
  { path: 'class-bind', component: ClassBindComponent },
  { path: 'event-bind', component: EventBindComponent },



];
