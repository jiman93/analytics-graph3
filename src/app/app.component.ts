import { Component, OnInit } from '@angular/core';
import { AppServices } from './equipment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  data: any[];
  view: any[] = [800, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private itemService: AppServices) {  
  }

  ngOnInit() {
    this.itemService.getJSON()
    .subscribe(resItemData => this.data = resItemData);
  }
  onSelect(event) {
    console.log(event);
  }
  
}

