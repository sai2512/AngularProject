import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { InvitationComponent } from '../invitation/invitation.component';
import { EngagementComponent } from '../engagement/engagement.component';
import { MarriageComponent } from '../marriage/marriage.component';
import { HomeComponent } from '../home/home.component';
const routes: Routes = [
{
path:'',
redirectTo: '/home', pathMatch: 'full'
},
{
path:'home',
component: HomeComponent
},
{
path:'invitation',
component: InvitationComponent
},
{
path:'engagement',
component: EngagementComponent
},
{
path:'marriage',
component: MarriageComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ]
})
export class AppRoutingModule { }
