import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatmessageComponent } from './chatmessage/chatmessage.component';
import { Chatmessage2Component } from './chatmessage2/chatmessage2.component';

const routes: Routes = [
  {
    path:'chatmessage2',
   component:Chatmessage2Component
  },
{
  path:'chatmessage',
  component:ChatmessageComponent
},
{
  path:'**',
  redirectTo:'chatmessage'
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
