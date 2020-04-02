
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'


import { GoalComponent } from '../goal/goal.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: 'goals', component: GoalComponent},
  { path: 'about', component: AboutComponent},
  { path:'**', component:NotFoundComponent},

  { path: '', redirectTo:"/goals", pathMatch:"full"},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
