import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CharnavComponent } from "src/app/layout/charnav/charnav.component";
import { CharRootComponent } from "./char-root/char-root.component";
import { CharBaseComponent } from "./char-base/char-base.component";
import { CharValueComponent } from "./char-value/char-value.component";
import { CharDeleteComponent } from "./char-delete/char-delete.component";
import { CharCreateComponent } from "./char-create/char-create.component";

const routes: Routes = [
  {
    path: "center",
    component: CharRootComponent,
    children: [
      { path: "", redirectTo: "base", pathMatch: "full" },
      { path: "base", component: CharBaseComponent },
      { path: "value", component: CharValueComponent },
      { path: "delete", component: CharDeleteComponent },
      { path: "create", component: CharCreateComponent },
    ],
  },
  { path: "center", outlet: "charnav", component: CharnavComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterRoutingModule {}
