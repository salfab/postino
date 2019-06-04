import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-request-editor',
  templateUrl: './request-editor.component.html',
  styleUrls: ['./request-editor.component.sass']
})
export class RequestEditorComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      prout: ['', Validators.required]
  });
}

  onSave(event: Event) {
    event.preventDefault();
    console.warn('Got it');
  }

}
