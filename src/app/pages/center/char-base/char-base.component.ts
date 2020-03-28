import { Component, OnInit } from "@angular/core";
import { CharService } from "../_services/char.service";
import { Charbase } from "../charbase";

@Component({
  selector: "app-char-base",
  templateUrl: "./char-base.component.html",
  styleUrls: ["./char-base.component.scss"]
})
export class CharBaseComponent implements OnInit {
  character: Charbase;
  constructor(public char: CharService) {}

  ngOnInit(): void {
    this.char.onGetCharBase().subscribe(resp => (this.character = resp));
  }
}
