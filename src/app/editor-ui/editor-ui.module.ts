import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditorUiComponent } from './editor-ui.component';
import {EditorMenuModule} from '../editor-menu/editor-menu.module';
import {EditorTopBarModule} from '../editor-top-bar/editor-top-bar.module';
import {EditorNavigationModule} from '../editor-navigation/editor-navigation.module';
import {EditorMetadataModule} from '../editor-metadata/editor-metadata.module';

import { EditorMetadataComponent } from '../editor-metadata/editor-metadata.component';

// Dynatrace barista
import {DtIconModule} from '@dynatrace/barista-components/icon';
import {DtDrawerModule} from '@dynatrace/barista-components/drawer';
import {DtBreadcrumbsModule} from '@dynatrace/barista-components/breadcrumbs';

const appRoutes: Routes = [
    {path: 'home', component: EditorUiComponent},
    {path: 'editor', component: EditorUiComponent,
        children: [
            {path: 'metadata', component: EditorMetadataComponent},
            {path: 'source', component: EditorMetadataComponent}
        ]}
  ];

@NgModule({

    declarations: [EditorUiComponent],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DtIconModule.forRoot({ svgIconLocation: 'https://unpkg.com/@dynatrace/barista-icons/{{name}}.svg' }),
        DtDrawerModule,
        DtBreadcrumbsModule,
        EditorMenuModule,
        EditorTopBarModule,
        EditorNavigationModule,
        EditorMetadataModule,
    ],
    exports: [EditorUiComponent]
})
export class EditorUiModule {
}
