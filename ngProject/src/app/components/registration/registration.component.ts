import { Component, OnInit } from "@angular/core";
import { Info } from "../info";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  myForm: FormGroup;
  focus: number;
  record: Array<Info>;
  valid: number;
  id: number = 0;
  hide: any = false;
  count: number;
  unsave: any = false;
  gotData: any;

  temp: Array<Info>;
  constructor(private fb: FormBuilder) {
    this.reset(new Info());
    this.record = new Array<Info>();
  }

  ngOnInit() {
    this.gotData = this.finish();
  }

  async submit(form) {
    this.hide = true;
    if (form.value.id === null) {
      form.value.id = this.id += 1;
    }
    this.record.push(form.value);

    this.temp = new Array<Info>();
    for (var i = 0; i < this.record.length; ++i) {
      this.record.forEach(item => {
        if (item.id === i + 1) {
          this.temp.push(item);
        }
      });
    }
    this.record = this.temp;
    this.myForm.reset();
    this.hide = await this.timer();
  }

  async Edit(Form) {
    if (
      this.myForm.value.id !== null ||
      (this.myForm.touched && this.myForm.dirty)
    ) {
      // alert("You have unsave changes!");
      this.unsave = true;
      this.unsave = await this.timer();
    } else {
      this.reset(Form);
      this.record = this.record.filter(info => {
        if (info !== Form) {
          return info;
        }
      });
    }
  }

  timer() {
    return new Promise((resolve, reject) => {
      var count = 1;
      var time = setInterval(function() {
        count += 1;
        if (count === 3) {
          clearInterval(time);
          resolve(false);
        }
      }, 2000);
    });
  }

  timer2() {
    return new Promise(resolve => {
      var count = 1;
      var time = setInterval(function() {
        count += 1;
        if (count === 2) {
          clearInterval(time);
          resolve(true);
        }
      }, 1000);
    });
  }

  async finish() {
    var done: any = await this.timer2();
    return "done";
  }

  reset(val) {
    this.myForm = this.fb.group({
      id: [val.id, ""],
      firstname: [
        val.firstname,
        [Validators.required, Validators.pattern("[a-zA-Z ]*")]
      ],
      lastname: [
        val.lastname,
        [Validators.required, Validators.pattern("[a-zA-Z ]*")]
      ],
      Email: [
        val.Email,
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
        ]
      ],
      gender: [val.gender, Validators.required],
      age: [val.age, [Validators.required]]
    });
  }

  validate(value, validation) {
    this.valid = 0;
    if (this.myForm.get(value).touched) {
      validation.forEach(error => {
        switch (error) {
          case "required":
            if (this.myForm.get(value).hasError(error)) {
              this.valid++;
            }
            break;
          case "pattern":
            if (this.myForm.get(value).hasError(error)) {
              this.valid++;
            }
            break;
          case "minlength":
            if (this.myForm.get(value).hasError(error)) {
              this.valid++;
            }
            break;
        }
      });
    }
    return this.valid > 0;
  }
}
