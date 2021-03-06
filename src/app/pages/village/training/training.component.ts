import { ThrowStmt } from "@angular/compiler";
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
import { TrainService } from "../_services/train.service";

@Component({
  selector: "app-training",
  templateUrl: "./training.component.html",
  styleUrls: ["./training.component.scss"],
})
export class TrainingComponent implements OnInit {
  charavalue: Charvalue = new Charvalue();
  baseTrainValues;
  doubletrainCheck: boolean = false;
  mintrainCheck: boolean = false;
  public activTrain: { key: string; value: number };

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

  constructor(
    public fb: FormBuilder,
    public chara: CharService,
    public ts: TrainService
  ) {}

  ngOnInit(): void {
    this.ts.getBaseTrain().subscribe((resp) => {
      this.baseTrainValues = resp;
    });
    this.onUpdate();
    this.trainForm.valueChanges.subscribe((newForm) => {
      let countMultiTrain = 0;
      let countMinTrain = 0;
      this.doubletrainCheck = false;
      this.mintrainCheck = false;
      for (let element in this.formHolder) {
        if (newForm[element]["value"] > this.charavalue[element]) {
          countMultiTrain += 1;
        } else if (newForm[element]["value"] < this.charavalue[element]) {
          countMinTrain += 1;
        }
      }
      if (countMultiTrain > 1) {
        this.doubletrainCheck = true;
      }
      if (countMinTrain > 0) {
        this.mintrainCheck = true;
      }
    });
  }

  onUpdate() {
    this.ts.getIndexTrain().subscribe(
      (resp) => {
        this.activTrain = {
          key: this.formHolder[resp["char_value"]],
          value: resp["days"],
        };
      },
      (err) => {
        this.activTrain = null;
      }
    );
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
  }

  onDelete() {
    this.ts.deleteTrain().subscribe((resp) => {
      this.onUpdate();
    });
  }

  checkTrainCustomValue(key: string): boolean {
    return this.trainForm.value[key]["value"] > this.charavalue[key];
  }

  getTrainDays(key: string): number {
    return Math.ceil(
      (this.trainForm.value[key]["value"] - this.charavalue[key]) /
        this.baseTrainValues[key]
    );
  }

  onSubmit(name: string) {
    let out = {
      id: this.chara.getCharId(),
      key: name,
      value: this.getTrainDays(name),
    };
    this.ts.postCharTrain(out).subscribe(
      //TODO better return value handling
      (response) => {
        this.onUpdate();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
}
