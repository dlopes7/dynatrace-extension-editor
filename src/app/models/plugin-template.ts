export var pluginAGTemplate = {
    "name": "custom.remote.python.custom_extension",
    "version": "1.001",
    "type": "python",
    "entity": "CUSTOM_DEVICE",
    "technologies": ["Custom"],
    "metricGroup": "tech.Custom",
    "source": {
        "package": "custom_extension",
        "className": "CustomExtension",
        "install_requires": [],
        "activation": "Remote"
    },
    "properties": [],

    "configUI": {
        "displayName": "Custom Extension",
        "properties": []
    },

    "metrics": [
        { "entity": "CUSTOM_DEVICE", "timeseries": { "key": "custom_metric", "unit": "Count", "displayname": "Custom Metric" } },
    ],

    "ui": {
        "keymetrics": [
            { "key": "custom_metric", "displayName": "Custom Metric", "aggregation": "avg" }
        ],
        "keycharts": [
            { "group": "Custom Group", "title": "Custom Title", "series": [{ "key": "custom_metric", "mergeaggregation": "AVG" }] },
        ],
        "charts": [
            { "group": "Custom Group", "title": "Custom Title", "series": [{ "key": "custom_metric", "mergeaggregation": "AVG" }] },
        ]
    }
}
