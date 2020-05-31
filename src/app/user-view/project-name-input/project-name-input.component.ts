import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ProjectNameTakenValidator} from '../../helpers/project-uniquity-validators';

@Component({
  selector: 'app-project-name-input',
  templateUrl: './project-name-input.html',
  styleUrls: ['./project-name-input.css']
})
export class ProjectNameInputComponent implements OnInit {
  input: FormControl;

  @Input() click: (projectName: string) => void;
  @Input() showRequired = true;
  @Input() buttonText: string;
  @Input() placeholderText: string;
  @Input() defaultValue: string;
  @Input() projectId: number;

  constructor(private projectNameTakenValidator: ProjectNameTakenValidator) {
  }

  ngOnInit() {
    this.input = new FormControl('' || this.defaultValue, [
      Validators.required,
      Validators.maxLength(60),
      Validators.minLength(6),
      Validators.pattern(/^[a-zA-Z_\-0-9]*$/)
    ], [
      this.projectNameTakenValidator.validateFn(this.projectId)
    ]);
  }
  getValue() {
    return this.input.value;
  }
  onClick() {
    if (this.input.valid) {
      this.click(this.input.value);
    }
  }
}
