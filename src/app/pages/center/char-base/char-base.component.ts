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
  isCharId: boolean = false;
  charId: string = "";
  constructor(public char: CharService) {}

  ngOnInit(): void {
  }
  ngDoCheck() {
    if (this.char.isCharChoosen() !== this.isCharId) {
      this.isCharId = this.char.isCharChoosen();
      if (this.isCharId === true) {
        this.char.onGetCharBase().subscribe(resp => (this.character = resp));
      }
    }
    if (this.char.getCharId() !== this.charId) {
      this.charId = this.char.getCharId();
      if (this.charId) {
        this.char.onGetCharBase().subscribe(resp => (this.character = resp));
      }
    }
  }
}
