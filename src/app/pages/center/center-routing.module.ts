import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './character/character.component';
import { CharnavComponent } from 'src/app/layout/charnav/charnav.component';
import { CenterComponent } from './center.component';

const routes: Routes = [{
  path: 'center',
  component: CenterComponent,
  children: [
    {
      path: '',
      component: CharacterComponent
    },
  ]

},
{
  path: 'center',
  outlet: 'charnav',
  component: CharnavComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule { }
