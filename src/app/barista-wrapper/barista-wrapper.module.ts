import { NgModule } from '@angular/core';
import { DtBreadcrumbsModule } from '@dynatrace/barista-components/breadcrumbs';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtCardModule} from '@dynatrace/barista-components/card';
import { DtDrawerModule } from '@dynatrace/barista-components/drawer';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtMenuModule } from '@dynatrace/barista-components/menu';
import { DtTableModule } from '@dynatrace/barista-components/table';
import { DtTopBarNavigationModule } from '@dynatrace/barista-components/top-bar-navigation';
import {DtTagModule} from '@dynatrace/barista-components/tag';
import {DtFormFieldModule} from '@dynatrace/barista-components/form-field';
import {DtOptionModule} from '@dynatrace/barista-components/core';
import {DtSecondaryNavModule} from '@dynatrace/barista-components/secondary-nav';
import {DtConfirmationDialogModule} from '@dynatrace/barista-components/confirmation-dialog';
import {DtRadioModule} from '@dynatrace/barista-components/radio';
import {DtSelectModule} from '@dynatrace/barista-components/select';
import {DtKeyValueListModule} from '@dynatrace/barista-components/key-value-list';
import {DtInputModule} from '@dynatrace/barista-components/input';
import {DtInlineEditorModule} from '@dynatrace/barista-components/inline-editor';
import {DtAlertModule} from '@dynatrace/barista-components/alert';
import {DtAutocompleteModule} from '@dynatrace/barista-components/autocomplete';
import {DtBarIndicatorModule} from '@dynatrace/barista-components/bar-indicator';
import {DtButtonGroupModule} from '@dynatrace/barista-components/button-group';
import {DtChartModule} from '@dynatrace/barista-components/chart';
import {DtCheckboxModule} from '@dynatrace/barista-components/checkbox';
import {DtConsumptionModule} from '@dynatrace/barista-components/consumption';
import {DtContainerBreakpointObserverModule} from '@dynatrace/barista-components/container-breakpoint-observer';
import {DtContextDialogModule} from '@dynatrace/barista-components/context-dialog';
import {DtCopyToClipboardModule} from '@dynatrace/barista-components/copy-to-clipboard';
import {DtEmptyStateModule} from '@dynatrace/barista-components/empty-state';
import {DtEventChartModule} from '@dynatrace/barista-components/event-chart';
import {DtExpandablePanelModule} from '@dynatrace/barista-components/expandable-panel';
import {DtExpandableSectionModule} from '@dynatrace/barista-components/expandable-section';
import {DtExpandableTextModule} from '@dynatrace/barista-components/expandable-text';
import {DtFilterFieldModule} from '@dynatrace/barista-components/filter-field';
import {DtFormattersModule} from '@dynatrace/barista-components/formatters';
import {DtHighlightModule} from '@dynatrace/barista-components/highlight';
import {DtInfoGroupModule} from '@dynatrace/barista-components/info-group';
import {DtIndicatorModule} from '@dynatrace/barista-components/indicator';
import {DtLegendModule} from '@dynatrace/barista-components/legend';
import {DtLoadingDistractorModule} from '@dynatrace/barista-components/loading-distractor';
import {DtMicroChartModule} from '@dynatrace/barista-components/micro-chart';
import {DtOverlayModule} from '@dynatrace/barista-components/overlay';
import {DtPaginationModule} from '@dynatrace/barista-components/pagination';
import {DtProgressBarModule} from '@dynatrace/barista-components/progress-bar';
import {DtProgressCircleModule} from '@dynatrace/barista-components/progress-circle';
import {DtRadialChartModule} from '@dynatrace/barista-components/radial-chart';
import {DtTileModule} from '@dynatrace/barista-components/tile';
import {DtShowMoreModule} from '@dynatrace/barista-components/show-more';
import {DtStepperModule} from '@dynatrace/barista-components/stepper';
import {DtSwitchModule} from '@dynatrace/barista-components/switch';
import {DtTabsModule} from '@dynatrace/barista-components/tabs';
import {DtTimelineChartModule} from '@dynatrace/barista-components/timeline-chart';
import {DtToastModule} from '@dynatrace/barista-components/toast';
import {DtToggleButtonGroupModule} from '@dynatrace/barista-components/toggle-button-group';
import {DtThemingModule} from '@dynatrace/barista-components/theming';
import {DtTreeTableModule} from '@dynatrace/barista-components/tree-table';


@NgModule({
  declarations: [],
  imports: [
    DtIconModule.forRoot({ svgIconLocation: '/assets/icons/{{name}}.svg' }),
  ],
  exports: [
    DtAlertModule,
    DtAutocompleteModule,
    DtBarIndicatorModule,
    DtBreadcrumbsModule,
    DtButtonModule,
    DtButtonGroupModule,
    DtCardModule,
    DtChartModule,
    DtCheckboxModule,
    DtConfirmationDialogModule,
    DtConsumptionModule,
    DtContainerBreakpointObserverModule,
    DtContextDialogModule,
    DtCopyToClipboardModule,
    DtDrawerModule,
    DtEmptyStateModule,
    DtEventChartModule,
    DtExpandablePanelModule,
    DtExpandableSectionModule,
    DtExpandableTextModule,
    DtFilterFieldModule,
    DtFormattersModule,
    DtFormFieldModule,
    DtHighlightModule,
    DtIndicatorModule,
    DtInfoGroupModule,
    DtInlineEditorModule,
    DtInputModule,
    DtKeyValueListModule,
    DtLegendModule,
    DtLoadingDistractorModule,
    DtMenuModule,
    DtMicroChartModule,
    DtOverlayModule,
    DtOptionModule,
    DtPaginationModule,
    DtProgressBarModule,
    DtProgressCircleModule,
    DtRadialChartModule,
    DtRadioModule,
    DtSecondaryNavModule,
    DtTableModule,
    DtThemingModule,
    DtTileModule,
    DtSelectModule,
    DtShowMoreModule,
    DtStepperModule,
    DtSwitchModule,
    DtTabsModule,
    DtTagModule,
    DtTimelineChartModule,
    DtToastModule,
    DtToggleButtonGroupModule,
    DtTopBarNavigationModule,
    DtTreeTableModule,

  ]
})
export class BaristaWrapperModule { }
