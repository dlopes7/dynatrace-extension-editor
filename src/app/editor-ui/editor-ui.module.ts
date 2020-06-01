import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { EditorUiComponent } from './editor-ui.component';

// Dynatrace barista
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DtTopBarNavigationModule} from '@dynatrace/barista-components/top-bar-navigation';
import {DtSecondaryNavModule} from '@dynatrace/barista-components/secondary-nav';
import {DtDrawerModule} from '@dynatrace/barista-components/drawer';
import {DtKeyValueListModule} from '@dynatrace/barista-components/key-value-list';
import {DtCardModule} from '@dynatrace/barista-components/card';
import {DtMenuModule} from '@dynatrace/barista-components/menu';
import {DtBreadcrumbsModule} from '@dynatrace/barista-components/breadcrumbs';

const appRoutes: Routes = [
    {path: 'home', component: EditorUiComponent},
    {path: 'editor', component: EditorUiComponent}
  ];

@NgModule({

    declarations: [EditorUiComponent],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        BrowserAnimationsModule,
        DtIconModule.forRoot({ svgIconLocation: '/assets/icons/{{name}}.svg' }),
        DtTopBarNavigationModule,
        DtSecondaryNavModule,
        DtDrawerModule,
        DtKeyValueListModule,
        DtCardModule,
        DtMenuModule,
        DtBreadcrumbsModule
    ],
    exports: [EditorUiComponent]
})
export class EditorUiModule {
}
