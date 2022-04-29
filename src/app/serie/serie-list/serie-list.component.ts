import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { dataSeries } from './dataSeries';
import { SerieListService } from './serie-list.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})

export class SerieListComponent implements OnInit {
 series: Array<Serie> = [];
 promedioSeries: number=0;
 constructor(private serieListService: SerieListService) { }

 getSeries() {
  this.serieListService.getSeries().subscribe(series => {
    this.series = series;
  });
}
  prom(){
    this.series.forEach(element=>{this.promedioSeries+=element.seasons;});
    this.promedioSeries/=this.series.length;
  }

 ngOnInit() {
   this.getSeries();
   this.prom();
 }

}
