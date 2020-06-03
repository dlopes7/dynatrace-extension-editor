export class Metric {
    entity: string;
    key: string;
    displayname: string;
    dimensions: string[];
    unit: string;
    type: string;
    states: string[];

    inCharts: number;
    inKeyCharts: number;
    isKeyMetric: boolean;
}