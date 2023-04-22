import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'contries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  searchByCapital(term: string): void {
    console.log('Desde ByCapitalPage');
    console.log({term});
  }

}
