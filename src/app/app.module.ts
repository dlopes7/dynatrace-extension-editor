import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { DtIconModule } from '@dynatrace/barista-components/icon';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { EditorUiModule } from './editor-ui/editor-ui.module';
import { EditorUiComponent } from './editor-ui/editor-ui.component';
import { DownloadModule } from './download/download.module';
import { DownloadComponent } from './download/download.component';

import { EditorMetadataComponent } from './editor-metadata/editor-metadata.component';
import { EditorSourceComponent } from './editor-source/editor-source.component';
import { EditorMetricsComponent } from './editor-metrics/editor-metrics.component';
import { EditorPropertiesComponent } from './editor-properties/editor-properties.component';
import { EditorMetricDetailsComponent } from './editor-metric-details/editor-metric-details.component'



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'editor', component: EditorUiComponent,
      children: [
          {path: 'metadata', component: EditorMetadataComponent},
          {path: 'source', component: EditorSourceComponent},
          {path: 'properties', component: EditorPropertiesComponent},
          {path: 'metrics', component: EditorMetricsComponent},
          {path: 'metrics/edit', component: EditorMetricDetailsComponent},
      ]},
  {path: 'download', component: DownloadComponent}

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
    EditorUiModule,
    DownloadModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
