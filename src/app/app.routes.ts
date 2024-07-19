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
import { PromiseComponent } from './Rxjs/promise/promise.component';
import { AsyncAwaitComponent } from './Rxjs/async-await/async-await.component';
import { ObservablesComponent } from './Rxjs/observables/observables.component';
import { AllComponent } from './Rxjs/observables/all/all.component';
import { FromEventComponent } from './Rxjs/observables/from-event/from-event.component';
import { ListComponent } from './Rxjs/observables/list/list.component';
import { IntervalComponent } from './Rxjs/observables/interval/interval.component';
import { CkeditorComponent } from './components/ckeditor/ckeditor.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import { CodeMirrorComponent } from './components/code-mirror/code-mirror.component';
import { OtpInputComponent } from './components/otp-input/otp-input.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { DialogComponent } from './components/dialog/dialog.component';

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
  { path: 'promise', component: PromiseComponent },
  {path:'async',component:AsyncAwaitComponent},
  {path:'observables',component:ObservablesComponent,children:[
    {path:'',component:ListComponent},
    {path:'all',component:AllComponent},
    {path:'from-event',component:FromEventComponent},
    {path:'interval',component:IntervalComponent}
  ]},
  {path:'ckeditor',component:CkeditorComponent},
  {path:'map',component:GoogleMapComponent},
  {path:'ag-grid',component:AgGridComponent},
  {path:'code-mirror',component:CodeMirrorComponent},
  {path:'otp',component:OtpInputComponent},
  {path:'skeleton',component:SkeletonComponent},
  {path:'d',component:DialogComponent},


];
