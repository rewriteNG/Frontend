import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-villagenav",
  templateUrl: "./villagenav.component.html",
  styleUrls: ["./villagenav.component.scss"],
})
export class VillagenavComponent implements OnInit {
  items = [
    { route: "news", title: "Dorf-Nachrichten", name: "Nachrichten" },
    { route: "train", title: "Dorf-Training", name: "Training" },
  ];
  constructor(private titleTagService: Title) {}

  ngOnInit(): void {}
  /**
   * sets the the Title of the Page in the Header
   * @param pageTitle
   */
  public setTitle(pageTitle: string) {
    this.titleTagService.setTitle(pageTitle);
  }
}
