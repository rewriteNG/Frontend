import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterRoutingModule } from './center-routing.module';
import { CharnavComponent } from 'src/app/layout/charnav/charnav.component';
import { CharRootComponent } from './char-root/char-root.component';
import { CharBaseComponent } from './char-base/char-base.component';


@NgModule({
  declarations: [
    CharnavComponent,
    CharRootComponent,
    CharBaseComponent,
  ],
  imports: [
    CommonModule,
    CenterRoutingModule
  ]
})
export class CenterModule { }
