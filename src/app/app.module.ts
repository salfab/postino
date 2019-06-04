import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { RequestEditorComponent } from './request-editor/request-editor.component';
import { HeadersEditorComponent } from './headers-editor/headers-editor.component';
import { BodyEditorComponent } from './body-editor/body-editor.component';
import { VerbEditorComponent } from './verb-editor/verb-editor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RequestEditorComponent,
    HeadersEditorComponent,
    BodyEditorComponent,
    VerbEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
