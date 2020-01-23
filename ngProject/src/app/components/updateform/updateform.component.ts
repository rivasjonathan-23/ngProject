import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Info } from "../info";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Record } from "../client/record";
import { Service } from "../../services/service.service";
import { Result } from "../../services/result";

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
  @Input() record: Array<Record>;
  myForm: FormGroup;
  submitted: boolean;
  report: Record;
  valid: number;
  done: any = true;

  constructor(private fb: FormBuilder, private service: Service) {
    this.reset(new Record());
    this.report = new Record();
    this.record = new Array<Record>();
  }

  ngOnInit() {}

  timer() {
    return new Promise(resolve => {
      var count = 1;
      var time = setInterval(function() {
        count += 1;
        if (count === 3) {
          clearInterval(time);
          resolve(true);
        }
      }, 2000);
    });
  }
  async finish() {
    this.done = await this.timer();
    this.editing = false;
    this.update.emit(this.record);
    this.toUpdate = new Record();
  }

  closeNot() {
    this.done = true;
    this.editing = false;
    this.update.emit(this.record);
  }

  async onsubmit(data) {
    if (this.editing) {
      this.service.updateData(this.toUpdate).subscribe(result => {
        console.log(result);

        this.submitted = true;

        if (result.success) {
          this.record.forEach(item => {
            if (item._id == data.value._id) {
              var index: number = this.record.indexOf(item);
              this.record[index] = data.value;
              this.reset(new Record());
            }
          });

          this.done = false;
          this.finish();
        }
      });
    } else {
      this.report = data.value;
      this.service.addData(this.report).subscribe(result => {
        console.log(result);

        this.submitted = true;

        this.record = result;
        this.done = false;
        this.finish();
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
        if (this.myForm.get(value).hasError(error)) {
          this.valid++;
        }
      });
    }
    return this.valid > 0;
  }
}
