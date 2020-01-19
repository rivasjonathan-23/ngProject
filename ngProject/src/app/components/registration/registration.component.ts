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

  constructor(private fb: FormBuilder) {
    this.record = new Array<Info>();
  }

  ngOnInit() {
    this.reset(new Info());
  }

  submit(form) {
    this.record.push(form.value);
    this.reset(new Info());
  }

  Edit(Form) {
    this.reset(Form);
  }

  reset(val) {
    this.myForm = this.fb.group({
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
