import { RequestConfig } from './../models/RequestConfig';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';



@Component({
  selector: 'app-request-editor',
  templateUrl: './request-editor.component.html',
  styleUrls: ['./request-editor.component.sass']
})
export class RequestEditorComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private store: Store<State>,
    private formBuilder: FormBuilder
) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      prout: ['', Validators.required]
  });
}

  onVerbChanged(requestConfig: RequestConfig) {
    this.store.dispatch();
  }

  onSave(event: Event) {
    event.preventDefault();
    console.warn('Got it');
  }

}
