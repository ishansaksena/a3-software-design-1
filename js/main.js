// Using Victoria Juan's Radar Chart

$(function () {
    d3.csv("data/sample.csv", function (data) {
        var radar = RadarChart();
        var chartWrapper = d3.select('#viz')
            .datum([data])
            .call(radar);
    });
});