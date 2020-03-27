import { Component } from "@angular/core";
import { AuthService } from "./pages/auth/_services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ngfront";
  constructor(public auth: AuthService) {}
}
