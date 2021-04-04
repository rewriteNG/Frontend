import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CharService } from "../_services/char.service";

@Component({
  selector: "app-char-create",
  templateUrl: "./char-create.component.html",
  styleUrls: ["./char-create.component.scss"],
})
export class CharCreateComponent implements OnInit {
  // createCharForm = new FormGroup({
  //   name: new FormControl(),
  //   age: new FormControl(),
  // });
  error: any;
  createCharForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    age: [12, [Validators.required, Validators.min(12), Validators.max(21)]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public char: CharService
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.createCharForm.value);
    this.char.onCreateChar(this.createCharForm.value).subscribe(
      (response) => {},
      (err) => {
        this.error = err.error;
      }
    );
  }
  get name() {
    return this.createCharForm.get("name");
  }
  get age() {
    return this.createCharForm.get("age");
  }
}
