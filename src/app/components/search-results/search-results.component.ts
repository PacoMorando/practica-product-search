import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';
import { Result, SearchResults } from '../../services/search-results';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RouterLink],//RouterLink para navegar con la directiva 'routerLink'
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit {
  private searchService: SearchService = inject(SearchService);

  protected searchResults: SearchResults | undefined;
  protected stringResult: string = '';

  constructor() {
    // this.searchService.getAsJSONTest().subscribe(data => {
    //   console.log(data);
    // });
  }

  ngOnInit(): void {
    let results$: Observable<SearchResults | undefined> = this.searchService.getSearchResultsObservable();
    results$.subscribe(searchResults => {
      if (searchResults != undefined) {
        this.stringResult = searchResults.query;
        this.searchResults = searchResults;
        console.log(this.searchResults);
      }
    });
  }

  // protected navigateToDetail(productId: string) { // estoe es para navegar con el router desde el service, pero estoy usando RouterLink para navegar con la directiva routerLink desde el html
  //   console.log(`Navegando por la hyper carretera de la informaci'on al producto cuyo ID correspode a ${productId}`);
  //   this.searchService.navigateToDetail(productId);
  // }


}
