import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './character/character.component';

const routes: Routes = [{
  path: 'center',
  children: [
    {
      path: '',
      component: CharacterComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule { }
