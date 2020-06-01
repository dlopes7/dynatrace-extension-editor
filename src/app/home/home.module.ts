import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

import { PluginJsonService } from '../shared/services/plugin-json.service';
import { EditorMenuModule } from '../editor-menu/editor-menu.module';
import { EditorTopBarModule } from '../editor-top-bar/editor-top-bar.module';

// Dynatrace barista
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtDrawerModule } from '@dynatrace/barista-components/drawer';
import { DtBreadcrumbsModule } from '@dynatrace/barista-components/breadcrumbs';
import { DtCardModule } from '@dynatrace/barista-components/card';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtAlertModule } from '@dynatrace/barista-components/alert';

@NgModule({
  declarations: [HomeComponent],
  providers: [PluginJsonService],
  imports: [
    CommonModule,
    RouterModule,
    DtIconModule.forRoot({ svgIconLocation: 'https://unpkg.com/@dynatrace/barista-icons/{{name}}.svg' }),

    DtDrawerModule,
    DtBreadcrumbsModule,
    DtCardModule,
    DtButtonModule,
    DtAlertModule,

    EditorMenuModule,
    EditorTopBarModule

  ]
})
export class HomeModule { }
