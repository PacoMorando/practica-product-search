import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  private searchService: SearchService = inject(SearchService);

  protected stringResult: string =''

  constructor() {
    let results$: Observable<string> = this.searchService.getSearchResultsObservable();
    results$.subscribe(results => {
      this.stringResult = JSON.stringify(results);
    });
    // this.searchService.getAsJSONTest().subscribe(data => {
    //   console.log(data);
    // });
  }

}
