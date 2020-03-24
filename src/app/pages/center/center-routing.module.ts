import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharnavComponent } from 'src/app/layout/charnav/charnav.component';
import { CharRootComponent } from './char-root/char-root.component';
import { CharBaseComponent } from './char-base/char-base.component';

const routes: Routes = [
  {
    path: 'center',
    component: CharRootComponent,
    children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: 'base', component: CharBaseComponent }
    ]
  },
  { path: 'center', outlet: 'charnav', component: CharnavComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule { }
