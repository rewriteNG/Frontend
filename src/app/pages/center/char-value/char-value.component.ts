import { Component, OnInit } from "@angular/core";
import { CharService } from "../_services/char.service";
import { Charvalue } from "../charvalue";

@Component({
  selector: "app-char-value",
  templateUrl: "./char-value.component.html",
  styleUrls: ["./char-value.component.scss"]
})
export class CharValueComponent implements OnInit {
  character: Charvalue;

  constructor(public char: CharService) {}

  ngOnInit(): void {
    this.char.onGetCharValue().subscribe(resp => (this.character = resp));
  }
}
