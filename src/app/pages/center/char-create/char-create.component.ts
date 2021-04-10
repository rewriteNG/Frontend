import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Optionset } from "src/app/shared/_classes/optionset";
import { OptionsetService } from "src/app/shared/_services/optionset.service";
import { CharService } from "../_services/char.service";

@Component({
  selector: "app-char-create",
  templateUrl: "./char-create.component.html",
  styleUrls: ["./char-create.component.scss"],
})
export class CharCreateComponent implements OnInit {
  error: any;
  createCharForm = this.fb.group({
    firstname: ["", [Validators.required, Validators.minLength(4)]],
    lastname: ["", [Validators.required, Validators.minLength(4)]],
    gender: ["", [Validators.required]],
    home_village: ["", [Validators.required]],
    chakra_color: ["", [Validators.required]],
    age: [12, [Validators.required, Validators.min(12), Validators.max(21)]],
  });
  public genderOptions;
  public home_villageOptions;
  public chakra_colorOptions;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public char: CharService,
    public optionservice: OptionsetService
  ) {}

  ngOnInit() {
    this.optionservice
      .getOptionset("gender")
      .subscribe((resp) => (this.genderOptions = resp));
    this.optionservice
      .getOptionset("home_village")
      .subscribe((resp) => (this.home_villageOptions = resp));
    this.optionservice
      .getOptionset("chakra_color")
      .subscribe((resp) => (this.chakra_colorOptions = resp));
  }

  onSubmit() {
    console.log(this.createCharForm.value);
    this.char.onCreateChar(this.createCharForm.value).subscribe(
      (response) => {},
      (err) => {
        this.error = err.error;
      }
    );
  }
  get firstname() {
    return this.createCharForm.get("firstname");
  }
  get lastname() {
    return this.createCharForm.get("lastname");
  }
  get gender() {
    return this.createCharForm.get("gender");
  }
  get home_village() {
    return this.createCharForm.get("home_village");
  }
  get chakra_color() {
    return this.createCharForm.get("chakra_color");
  }
  get age() {
    return this.createCharForm.get("age");
  }
}
