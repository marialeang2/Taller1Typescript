import { Serie } from "./Serie.js";

import {series} from "./data.js"

const seriesTBody: HTMLElement = document.getElementById('series')!;
const averageTBody: HTMLElement = document.getElementById('average')!;

renderSeriesInTable(series)
renderAverage(series)


function renderSeriesInTable(series: Serie[]): void{
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.refNumber}</td>
                                <td>${c.name}</td>
                                <td>${c.channel}</td>
                                <td>${c.seasons}</td>`;
        seriesTBody.appendChild(trElement)
    });

}

function renderAverage(series: Serie[]): void {
    let averageSeason = getAverageSeason(series);
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td colspan="3">Season Average:</td><td>${averageSeason}</td>`;
    averageTBody.appendChild(trElement);
}


function getAverageSeason(series : Serie[]): number {
    let averageSeason: number = 0;
    let sumSeasons: number = 0;
    series.forEach((serie) => sumSeasons = sumSeasons + serie.seasons)
    averageSeason = sumSeasons/series.length
    return averageSeason
    

}




