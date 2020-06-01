import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { DtIconModule } from '@dynatrace/barista-components/icon';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { EditorUiComponent } from './editor-ui/editor-ui.component';
import { EditorUiModule } from './editor-ui/editor-ui.module';
import { EditorMetadataComponent } from './editor-metadata/editor-metadata.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'editor', component: EditorUiComponent,
      children: [
          {path: 'metadata', component: EditorMetadataComponent},
          {path: 'source', component: EditorMetadataComponent}
      ]}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule,
    DtIconModule.forRoot({ svgIconLocation: 'https://unpkg.com/@dynatrace/barista-icons/{{name}}.svg' }),
    HomeModule,
    EditorUiModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
