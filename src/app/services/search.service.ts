import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { SearchResults } from './search-results';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private httpClient: HttpClient = inject(HttpClient);
  readonly searchBaseUrlTest: string = "https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=4";
  readonly searchBaseUrl: string = "https://api.mercadolibre.com/sites/MLA/search?q=";
  private searchResults!: BehaviorSubject<SearchResults | undefined>;

  constructor() {
    this.searchResults = new BehaviorSubject<SearchResults | undefined>(undefined);
  }

  
  public getProducts(product: string) {
    this.httpClient.get<SearchResults | undefined>(`${this.searchBaseUrl}${product}&limit=4`).subscribe(searchResults => {
      this.searchResults.next(searchResults);
    });
    
  }
  
  public getSearchResultsObservable() {
    return this.searchResults.asObservable();
  }
  
  // public getAsJSON(product: string) {
  //   this.httpClient.get<JSON>(`${this.searchBaseUrl}${product}&limit=4`).subscribe(results => {
  //     this.searchResults.next(JSON.stringify(results));
  //   });
  // }

  //ESTE METODO ES UN EJEMPLO PARA PODERSE SUSCRIBIR A EL Y QUE ADEMAS REALIZA OPERACIONES CON LA RESPUESTA "tap(r => {})"
  // public getAsJSON(product: string): Observable<JSON> {
  //   return this.httpClient.get<JSON>(`${this.searchBaseUrl}${product}&limit=4`).pipe(tap(response => {
  //     this.searchResults.next(JSON.stringify(response));
  //   }));
  // }

}