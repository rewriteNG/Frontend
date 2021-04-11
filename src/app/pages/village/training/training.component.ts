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

  trainStrForm = this.fb.group({
    time: [0],
    value: [0, [this.customStrValidor]],
  });
  trainDefForm = this.fb.group({
    time: [0],
    value: [0, [this.customDefValidor]],
  });

  trainSpeedForm = this.fb.group({
    time: [0],
    value: [0, [this.customSpeedValidor]],
  });

  trainStaminaForm = this.fb.group({
    time: [0],
    value: [0, [this.customStaminaValidor]],
  });

  trainChakraForm = this.fb.group({
    time: [0],
    value: [0, [this.customChakraValidor]],
  });

  formHolder = {
    Stärke: { form: this.trainStrForm, start: "str" },
    Verteidigung: { form: this.trainDefForm, start: "def" },
    Geschwindigkeit: { form: this.trainSpeedForm, start: "speed" },
    Chakra: { form: this.trainChakraForm, start: "chakra" },
    Ausdauer: { form: this.trainStaminaForm, start: "stamina" },
  };

  constructor(public fb: FormBuilder, public chara: CharService) {}

  ngOnInit(): void {
    this.chara.onGetCharValue().subscribe((resp) => {
      this.charavalue = resp;
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
