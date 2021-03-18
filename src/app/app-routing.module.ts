import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component';
import {ListRestoComponent} from './list-resto/list-resto.component';
const routes: Routes = [
  {
    path:'add',component:AddRestoComponent
  },
  {
    path:'update',component:UpdateRestoComponent
  },
  {
    path:"list",component:ListRestoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
