import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { DtInputModule } from '@dynatrace/barista-components/input';
import { DtToastModule } from '@dynatrace/barista-components/toast';


@NgModule({
  declarations: [HomeComponent],
  providers: [PluginJsonService],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,

    DtIconModule.forRoot({ svgIconLocation: 'https://unpkg.com/@dynatrace/barista-icons/{{name}}.svg' }),
    DtDrawerModule,
    DtBreadcrumbsModule,
    DtCardModule,
    DtButtonModule,
    DtAlertModule,
    DtFormFieldModule,
    DtInputModule,
    DtToastModule,

    EditorMenuModule,
    EditorTopBarModule

  ]
})
export class HomeModule { }
