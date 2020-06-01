import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppComponent } from './app.component';
import { EditorUiComponent } from './editor-ui/editor-ui.component';
import { EditorUiModule } from './editor-ui/editor-ui.module';

const routes: Routes = [
  {path: '', component: EditorUiComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule,
    EditorUiModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
