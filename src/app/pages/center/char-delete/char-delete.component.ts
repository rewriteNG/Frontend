import { Component, OnInit } from "@angular/core";
import { CharService } from "../_services/char.service";

@Component({
  selector: "app-char-delete",
  templateUrl: "./char-delete.component.html",
  styleUrls: ["./char-delete.component.scss"],
})
export class CharDeleteComponent implements OnInit {
  constructor(public char: CharService) {}

  ngOnInit(): void {}

  public onDelete() {
    console.log("Hallo");
    this.char.onDeleteChar().subscribe();
  }
}
