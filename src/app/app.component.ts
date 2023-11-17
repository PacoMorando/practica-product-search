import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchTabComponent } from './components/search-tab/search-tab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      CommonModule, RouterOutlet, 
      SearchResultsComponent, SearchTabComponent,
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-search';
}