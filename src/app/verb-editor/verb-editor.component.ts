import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-verb-editor',
  templateUrl: './verb-editor.component.html',
  styleUrls: ['./verb-editor.component.sass']
})
export class VerbEditorComponent implements OnInit {

  @Input()
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
) { }

  ngOnInit() {
    this.form.addControl('verb', this.formBuilder.control(null));
  }

}
