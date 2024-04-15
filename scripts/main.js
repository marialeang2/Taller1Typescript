import { series } from "./data.js";
var seriesTBody = document.getElementById('series');
var averageTBody = document.getElementById('average');
renderSeriesInTable(series);
renderAverage(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.refNumber, "</td>\n                                <td>").concat(c.name, "</td>\n                                <td>").concat(c.channel, "</td>\n                                <td>").concat(c.seasons, "</td>");
        seriesTBody.appendChild(trElement);
    });
}
function renderAverage(series) {
    var averageSeason = getAverageSeason(series);
    var trElement = document.createElement("tr");
    trElement.innerHTML = '<td colspan="4">Season Average: ' + averageSeason + '</td>';
    averageTBody.appendChild(trElement);
}
function getAverageSeason(series) {
    var averageSeason = 0;
    var sumSeasons = 0;
    series.forEach(function (serie) { return sumSeasons = sumSeasons + serie.seasons; });
    averageSeason = sumSeasons / series.length;
    return averageSeason;
}
