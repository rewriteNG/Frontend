import { Component, OnInit } from "@angular/core";
import { CharService } from "src/app/pages/center/_services/char.service";

@Component({
  selector: "app-charchoose",
  templateUrl: "./charchoose.component.html",
  styleUrls: ["./charchoose.component.scss"]
})
export class CharchooseComponent implements OnInit {
  chars: any;
  constructor(public char: CharService) {}
  ngOnInit(): void {
    this.char.onCharOverView().subscribe(resp => {
      this.chars = resp;
    });
  }
}
