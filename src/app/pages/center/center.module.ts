import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterRoutingModule } from './center-routing.module';
import { CharacterComponent } from './character/character.component';
import { CharnavComponent } from 'src/app/layout/charnav/charnav.component';


@NgModule({
  declarations: [
    CharnavComponent,
    CharacterComponent,
  ],
  imports: [
    CommonModule,
    CenterRoutingModule
  ]
})
export class CenterModule { }
