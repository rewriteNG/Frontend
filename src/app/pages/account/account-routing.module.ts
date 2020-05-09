import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseComponent } from "./base/base.component";

const routes: Routes = [{ path: "account", component: BaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
