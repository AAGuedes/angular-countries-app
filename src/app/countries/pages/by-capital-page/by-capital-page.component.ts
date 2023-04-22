import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'contries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(
    private contriesService: CountriesService
  ) {}

  searchByCapital(term: string): void {
    this.contriesService.searchCapital(term)
      .subscribe(resp => {
        this.countries = resp;
    })
  }

}
