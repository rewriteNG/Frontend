import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VillageRoutingModule } from "./village-routing.module";
import { RootComponent } from "./root/root.component";
import { NewsComponent } from "./news/news.component";
import { VillagenavComponent } from "src/app/layout/villagenav/villagenav.component";
import { TrainingComponent } from './training/training.component';

@NgModule({
  declarations: [RootComponent, NewsComponent, VillagenavComponent, TrainingComponent],
  imports: [CommonModule, VillageRoutingModule],
})
export class VillageModule {}
