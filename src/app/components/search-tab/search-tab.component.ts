import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-tab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-tab.component.html',
  styleUrl: './search-tab.component.css'
})
export class SearchTabComponent {
  private searchService: SearchService = inject(SearchService);
  protected input: string = '';

  protected search() {
    this.searchService.getAsJSON(this.input);
  }

  // protected search() { EJENPLO SUSCRITO AL METODO
  //   this.searchService.getAsJSON(this.input).subscribe(searchResult => {
  //     console.log(searchResult);
  //   });
  // }

}