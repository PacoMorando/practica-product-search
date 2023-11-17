import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';
import { Result, SearchResults } from '../../services/search-results';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit {
  private searchService: SearchService = inject(SearchService);

  protected searchResults: SearchResults | undefined;
  protected stringResult: string = '';
  protected titleResult: string [] = [];

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
        this.setTitles(this.searchResults.results);
        console.log(this.titleResult);
      }
    });
  }

  private setTitles(results: Result[]) {
    for (const result of results) {
      this.titleResult.push(result.title);
      // this.titleResult += result.title + "Mundo\n";
    }
  }


}
