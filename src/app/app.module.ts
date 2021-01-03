import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaristaWrapperModule } from './barista-wrapper/barista-wrapper.module';
import { CommonModule } from '@angular/common';
import { EditorTopBarComponent } from './editor-top-bar/editor-top-bar.component';
import {DownloadComponent} from './download/download.component';
import {EditorMenuComponent} from './editor-menu/editor-menu.component';
import {HomeComponent} from './home/home.component';
import {EditorUiComponent} from './editor-ui/editor-ui.component';
import {EditorPropertiesComponent} from './editor-properties/editor-properties.component';
import {EditorNavigationComponent} from './editor-navigation/editor-navigation.component';
import {EditorMetricsComponent} from './editor-metrics/editor-metrics.component';
import {EditorMetricDetailsComponent} from './editor-metric-details/editor-metric-details.component';
import {EditorMetadataComponent} from './editor-metadata/editor-metadata.component';
import {FormsModule} from '@angular/forms';
import {EditorSourceComponent} from './editor-source/editor-source.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorMenuComponent,
    EditorMetadataComponent,
    EditorMetricDetailsComponent,
    EditorMetricsComponent,
    EditorNavigationComponent,
    EditorTopBarComponent,
    EditorPropertiesComponent,
    EditorPropertiesComponent,
    EditorSourceComponent,
    EditorUiComponent,
    HomeComponent,
    DownloadComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BaristaWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
