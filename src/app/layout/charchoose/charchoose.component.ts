import { Component, OnInit, SimpleChange, Input } from "@angular/core";
import { CharService } from "src/app/pages/center/_services/char.service";
import { AuthService } from "src/app/pages/auth/_services/auth.service";

@Component({
  selector: "app-charchoose",
  templateUrl: "./charchoose.component.html",
  styleUrls: ["./charchoose.component.scss"]
})
export class CharchooseComponent implements OnInit {
  characters: any;
  isAuth: boolean = false;
  constructor(private char: CharService, public auth: AuthService) {}
  ngOnInit(): void {}

  ngDoCheck() {
    if (this.auth.isAuthenticated() !== this.isAuth) {
      this.isAuth = this.auth.isAuthenticated();
      if (this.isAuth === true) {
        this.loadChars();
      }
    }
  }

  /**
   * small wrapper for the subscribe to onCharOverView
   * sets response to this.characters
   */
  loadChars() {
    this.char.onCharOverView().subscribe(resp => {
      this.characters = resp;
    });
  }

  setChar(id: number) {
    return localStorage.setItem('char_id', id.toString());
  }
}
