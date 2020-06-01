import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EditorUiComponent } from './editor-ui.component';
import { EditorMenuModule } from '../editor-menu/editor-menu.module';
import { EditorTopBarModule } from '../editor-top-bar/editor-top-bar.module';
import { EditorNavigationModule } from '../editor-navigation/editor-navigation.module';
import { EditorMetadataModule } from '../editor-metadata/editor-metadata.module';

// Dynatrace barista
import { DtDrawerModule } from '@dynatrace/barista-components/drawer';
import { DtBreadcrumbsModule } from '@dynatrace/barista-components/breadcrumbs';


@NgModule({

    declarations: [EditorUiComponent],
    imports: [
        CommonModule,
        RouterModule,

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
