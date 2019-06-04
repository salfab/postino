import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestConfig } from '../models/RequestConfig';

@Component({
  selector: 'app-body-editor',
  templateUrl: './body-editor.component.html',
  styleUrls: ['./body-editor.component.sass']
})
export class BodyEditorComponent implements OnInit {

  constructor() { }

  @Output() public bodyChanged = new EventEmitter<RequestConfig>();

  ngOnInit() {
  }

  onBodyChanged(event: Event) {
    event.preventDefault();
    const field = event.target as HTMLInputElement;
    this.bodyChanged.emit({ body : field.value} as RequestConfig);
  }

}
