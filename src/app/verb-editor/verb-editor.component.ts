import { RequestConfig } from './../models/RequestConfig';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-verb-editor',
  templateUrl: './verb-editor.component.html',
  styleUrls: ['./verb-editor.component.sass']
})
export class VerbEditorComponent implements OnInit {

  constructor() { }

  @Output() public verbChanged = new EventEmitter<RequestConfig>();

  ngOnInit() {
  }

  onChanged(event: Event) {
    event.preventDefault();
    const field = event.target as HTMLInputElement;
    this.verbChanged.emit({ verb : field.value} as RequestConfig);
  }
}
