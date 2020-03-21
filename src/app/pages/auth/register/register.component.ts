import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
      "name": ['', [Validators.required, Validators.minLength(4)]],
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', [Validators.required, Validators.minLength(8)]],
      "password_conf": ['']
    }, { validator: this.checkPass });
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
  checkPass(group: FormGroup) {
    let origin = group.get('password').value;
    let copy = group.get('password_conf').value;
    return origin === copy ? null : { notSame: true };
  }
}
