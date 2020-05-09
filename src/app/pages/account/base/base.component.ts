import { Component, OnInit } from "@angular/core";
import { User } from "../../auth/user";

@Component({
  selector: "app-base",
  templateUrl: "./base.component.html",
  styleUrls: ["./base.component.scss"],
})
export class BaseComponent implements OnInit {
  acc: User = new User();
  constructor() {}

  ngOnInit(): void {}

  onSubmit(accountForm): void {
    // this.auth.onLogin(this.user).subscribe(
    //   (response) => {
    //     //get return url from the route parameters or default to '/'
    //     this.router.navigate([this.returnUrl]);
    //   },
    //   (err) => {
    //     this.error = err.error;
    //   }
    // );
    // //Clear form fields
    // loginForm.reset();
  }
}
