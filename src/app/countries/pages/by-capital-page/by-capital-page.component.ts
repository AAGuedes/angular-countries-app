import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'contries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor(
    private contriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.initialValue = this.contriesService.cacheStore.byCapital.term;
    this.countries = this.contriesService.cacheStore.byCapital.countries;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.contriesService.searchCapital(term)
      .subscribe(resp => {
        this.countries = resp;
        this.isLoading = false;
      })
  }

}
