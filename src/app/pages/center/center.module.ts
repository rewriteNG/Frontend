import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { CenterRoutingModule } from "./center-routing.module";
import { CharnavComponent } from "src/app/layout/charnav/charnav.component";
import { CharRootComponent } from "./char-root/char-root.component";
import { CharBaseComponent } from "./char-base/char-base.component";
import { CharValueComponent } from "./char-value/char-value.component";
import { CharDeleteComponent } from "./char-delete/char-delete.component";
import { CharCreateComponent } from "./char-create/char-create.component";

@NgModule({
  declarations: [
    CharnavComponent,
    CharRootComponent,
    CharBaseComponent,
    CharValueComponent,
    CharDeleteComponent,
    CharCreateComponent,
  ],
  imports: [ReactiveFormsModule, CommonModule, CenterRoutingModule],
})
export class CenterModule {}
