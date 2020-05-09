import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService } from "./../../auth/_services/auth.service";
import { User } from "./../user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: any;
  returnUrl: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // set the return Url
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  onSubmit(loginForm): void {
    this.auth.onLogin(this.user).subscribe(
      () => {
        //get return url from the route parameters or default to '/'
        this.router.navigate([this.returnUrl]);
      },
      (err) => {
        this.error = err.error;
      }
    );
    //Clear form fields
    loginForm.reset();
  }
}
