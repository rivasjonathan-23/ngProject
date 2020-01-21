import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Info } from "../info";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Record } from "../client/record";
import { Service } from "../../services/service.service";

@Component({
  selector: "app-updateform",
  templateUrl: "./updateform.component.html",
  styleUrls: ["./updateform.component.scss"]
})
export class UpdateformComponent implements OnInit {
  @Input() toUpdate: Record;
  @Input() editing: boolean;
  @Output() cancelclick = new EventEmitter();
  @Output() update = new EventEmitter();
  record: Array<Record>;
  myForm: FormGroup;
  submitted: boolean;
  report: Record;
  valid: number;

  constructor(private fb: FormBuilder, private service: Service) {
    this.reset(new Record());
    this.report = new Record();
    this.record = new Array<Record>();
  }

  ngOnInit() {}

  onsubmit(data) {
    this.submitted = true;
    if (this.editing) {
      this.editing = false;
      this.service.updateData(this.toUpdate).subscribe(data => {
        console.log(data);
        this.record = data;

        this.toUpdate = new Record();
        this.reset(new Record());
      });
    } else {
      this.report = data.value;
      console.log(this.report);
      this.service.addData(this.report).subscribe(data => {
        this.record = data;

        this.update.emit(this.record);
        this.toUpdate = new Record();
        this.reset(new Record());
      });
    }
  }

  cancel() {
    var click = "cancel";
    this.toUpdate = new Record();
    this.cancelclick.emit(click);
    this.editing = false;
  }

  reset(val) {
    this.myForm = this.fb.group({
      _id: [val._id, ""],
      subject: [val.subject, Validators.required],
      body: [val.body, Validators.required],
      suggestions: [val.suggestions, Validators.required],
      photos: [val.photo, Validators.required]
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
