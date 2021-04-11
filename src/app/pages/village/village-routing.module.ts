import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { RootComponent } from "./root/root.component";
import { TrainingComponent } from "./training/training.component";

const routes: Routes = [
  {
    path: "village",
    component: RootComponent,
    children: [
      { path: "", redirectTo: "news", pathMatch: "full" },
      { path: "news", component: NewsComponent },
      { path: "train", component: TrainingComponent },
      //   { path: "delete", component: CharDeleteComponent },
      //   { path: "create", component: CharCreateComponent },
    ],
  },
  // { path: "center", outlet: "charnav", component: CharnavComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillageRoutingModule {}
