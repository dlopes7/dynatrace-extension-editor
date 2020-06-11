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

    constructor(key: string) {
        this.key = key;
        this.entity = "CUSTOM_DEVICE";
        this.displayname = key;
        this.dimensions = [];
        this.unit = "Count";
        this.type = "timeseries";
        this.inCharts = 0;
        this.inKeyCharts = 0;
        this.isKeyMetric = false;
    }
}