import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterRoutingModule } from './center-routing.module';
import { CharacterComponent } from './character/character.component';


@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    CenterRoutingModule
  ]
})
export class CenterModule { }
