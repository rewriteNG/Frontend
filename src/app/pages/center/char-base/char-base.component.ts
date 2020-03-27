import { Component, OnInit } from "@angular/core";
import { CharService } from "../_services/char.service";

@Component({
  selector: "app-char-base",
  templateUrl: "./char-base.component.html",
  styleUrls: ["./char-base.component.scss"]
})
export class CharBaseComponent implements OnInit {
  items = [
    { key: "Vorname", value: "Max" },
    { key: "Nachname", value: "Mustermann" },
    { key: "Fraktion", value: "Test Fraktion" },
    { key: "Rang", value: "Noob" },
    { key: "Standaort", value: "Daheim" },
    {
      key: "Beschreibung",
      value:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, eligendi nam a porro officia quidem ex magni. Sit placeat incidunt voluptates est aliquam, corporis vitae voluptas u dolores. Est, quae!"
    }
  ];
  constructor(private char: CharService) {}

  ngOnInit(): void {
    this.char.onGetCharBase().subscribe(resp => console.log(resp));
  }
}
