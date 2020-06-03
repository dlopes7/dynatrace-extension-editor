import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { RouterModule } from '@angular/router';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtDrawerModule } from '@dynatrace/barista-components/drawer';
import { DtBreadcrumbsModule } from '@dynatrace/barista-components/breadcrumbs';
import { DtCardModule } from '@dynatrace/barista-components/card';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { EditorMenuModule } from '../editor-menu/editor-menu.module';
import { EditorTopBarModule } from '../editor-top-bar/editor-top-bar.module';
import { PluginJsonService } from '../shared/services/plugin-json.service';



@NgModule({
  providers: [PluginJsonService],
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    RouterModule,
    DtIconModule.forRoot({ svgIconLocation: 'https://unpkg.com/@dynatrace/barista-icons/{{name}}.svg' }),
    DtDrawerModule,
    DtBreadcrumbsModule,
    DtCardModule,
    DtButtonModule,

    EditorMenuModule,
    EditorTopBarModule
  ]
})
export class DownloadModule { }
