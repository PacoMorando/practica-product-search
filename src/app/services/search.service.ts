import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { SearchResults } from './search-results';
import { Router } from '@angular/router';
import { ProductDescription, ProductDetail } from './product-detail';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private router: Router = inject(Router);
  private httpClient: HttpClient = inject(HttpClient);
  readonly searchBaseUrlTest: string = "https://api.mercadolibre.com/sites/MLM/search?q=iphone&limit=4";
  readonly searchBaseUrl: string = "https://api.mercadolibre.com/sites/MLM/search?q=";
  readonly productUrl: string = "https://api.mercadolibre.com/items/";
  // readonly productUrl: string = "https://api.mercadolibre.com/items/:id/description";
  private searchResults: BehaviorSubject<SearchResults | undefined>;

  constructor() {
    this.searchResults = new BehaviorSubject<SearchResults | undefined>(undefined);
  }


  public getProducts(product: string) {
    this.httpClient.get<SearchResults | undefined>(`${this.searchBaseUrl}${product}&limit=4`).subscribe(searchResults => {
      this.searchResults.next(searchResults);
    });
    this.router.navigate(['']);
  }

  public getSearchResultsObservable() {
    return this.searchResults.asObservable();
  }

  public getProductDetails(id: string): Observable<ProductDetail>{
    return this.httpClient.get<ProductDetail>(`${this.productUrl}${id}`).pipe();
  }

  public getProductDescription(id: string): Observable<ProductDescription>{
    return this.httpClient.get<ProductDescription>(`${this.productUrl}${id}/description`).pipe();
  }

  // public navigateToDetail(productId: string) { ESTO es para navegar con router el router y para pasar el parametro requerido por la ruta
  //   this.router.navigate([`/product-detail/${ productId }`]);
  // }

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