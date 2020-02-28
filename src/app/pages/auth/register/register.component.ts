import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  error: any;
  regisForm;
  returnUrl: string;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.regisForm = this.formBuilder.group({
      "name": ['', Validators.required],
      "email": ['', Validators.required],
      "password": ['', [Validators.required, Validators.minLength(8)]],
      "password_conf": ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() { return this.regisForm.controls; }

  onSubmit(regisForm) {
    this.submitted = true;

    if (this.regisForm.invalid) {
      return;
    }

    this.auth.onRegister(regisForm).subscribe(
      (response) => {
        //get return url from the route parameters or default to '/'
        this.router.navigate([this.returnUrl]);
      },
      (err) => {
        this.error = err.error;
      });
  }
}
