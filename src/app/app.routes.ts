import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { DataBindComponent } from './components/data-bind/data-bind.component';
import { ClassBindComponent } from './components/class-bind/class-bind.component';
import { EventBindComponent } from './components/event-bind/event-bind.component';
import { TemplateBindComponent } from './components/template-bind/template-bind.component';
import { ContentComponent } from './components/content/content.component';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { UserComponent } from './components/user/user.component';
import { HooksComponent } from './components/hooks/hooks.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { SignalComponent } from './angular17/signal/signal.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'bind', component: DataBindComponent },
  { path: 'class-bind', component: ClassBindComponent },
  { path: 'event-bind', component: EventBindComponent },
  { path: 'template', component: TemplateBindComponent },
  { path: 'content', component: ContentComponent },
  { path: 'container', component: NgContainerComponent },
  { path: 'user', component: UserComponent },
  { path: 'hooks', component: HooksComponent },
  { path: 'pipes', component: PipeComponent },
  { path: 'signal', component: SignalComponent },

];
