import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private httpClient: HttpClient = inject(HttpClient);
  private searchBaseUrl: string = "https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=4";

  constructor() { }


}
