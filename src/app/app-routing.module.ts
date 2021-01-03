import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EditorUiComponent} from './editor-ui/editor-ui.component';
import {EditorMetadataComponent} from './editor-metadata/editor-metadata.component';
import {EditorSourceComponent} from './editor-source/editor-source.component';
import {EditorPropertiesComponent} from './editor-properties/editor-properties.component';
import {EditorMetricsComponent} from './editor-metrics/editor-metrics.component';
import {EditorMetricDetailsComponent} from './editor-metric-details/editor-metric-details.component';
import {DownloadComponent} from './download/download.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'editor', component: EditorUiComponent,
    children: [
      {path: 'metadata', component: EditorMetadataComponent},
      {path: 'source', component: EditorSourceComponent},
      {path: 'properties', component: EditorPropertiesComponent},
      {path: 'metrics', component: EditorMetricsComponent},
      {path: 'metrics/:key', component: EditorMetricDetailsComponent},
    ]},
  {path: 'download', component: DownloadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
