import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Charvalue } from "../../center/charvalue";
import { CharService } from "../../center/_services/char.service";

@Component({
  selector: "app-training",
  templateUrl: "./training.component.html",
  styleUrls: ["./training.component.scss"],
})
export class TrainingComponent implements OnInit {
  charavalue: Charvalue = new Charvalue();
  trainCheck: boolean;
  customValidator(ac, key): ValidationErrors {
    if (+ac < this.charavalue[key]) {
      return { tooOld: true };
    } else {
      null;
    }
  }
  customStrValidor: ValidatorFn = (ac): ValidationErrors => {
    return this.customValidator(ac.value, "str");
  };
  customDefValidor: ValidatorFn = (ac): ValidationErrors => {
    return this.customValidator(ac.value, "def");
  };

  customSpeedValidor: ValidatorFn = (ac): ValidationErrors => {
    return this.customValidator(ac.value, "Speed");
  };

  customStaminaValidor: ValidatorFn = (ac): ValidationErrors => {
    return this.customValidator(ac.value, "Stamina");
  };

  customChakraValidor: ValidatorFn = (ac): ValidationErrors => {
    return this.customValidator(ac.value, "Chakra");
  };

  formHolder = {
    str: "Stärke",
    def: "Verteidigung",
    speed: "Geschwindigkeit",
    chakra: "Chakra",
    stamina: "Ausdauer",
  };

  trainForm = this.fb.group({
    str: this.fb.group({
      time: [0],
      value: [0],
    }),
    def: this.fb.group({
      time: [0],
      value: [0],
    }),
    speed: this.fb.group({
      time: [0],
      value: [0],
    }),
    stamina: this.fb.group({
      time: [0],
      value: [0],
    }),
    chakra: this.fb.group({
      time: [0],
      value: [0],
    }),
  });

  constructor(public fb: FormBuilder, public chara: CharService) {}

  ngOnInit(): void {
    this.chara.onGetCharValue().subscribe((resp) => {
      this.charavalue = resp;
      this.trainForm.setValue({
        str: { time: 0, value: resp.str },
        def: { time: 0, value: resp.def },
        speed: { time: 0, value: resp.speed },
        stamina: { time: 0, value: resp.stamina },
        chakra: { time: 0, value: resp.chakra },
      });
    });
    this.trainForm.valueChanges.subscribe((newForm) => {
      let count = 0;
      this.trainCheck = true;
      for (let element in this.formHolder) {
        if (newForm[element]["value"] > this.charavalue[element]) {
          count += 1;
        }
      }
      if (count <= 1) {
        return;
      }
      this.trainCheck = false;
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
