import { Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'results', title: 'Resultados de la busqueda', component: SearchResultsComponent },
    { path: 'product-detail/:id', title: 'Detalles del producto', component: ProductDetailComponent },
    { path: '', redirectTo: '/results', pathMatch: 'full' },//si no pones nada te manda a /results
    { path: '**', redirectTo: '/results', pathMatch: 'full' } //si pones una mensada te manda a /results, aqui se podria poner una pagina de no encontrado
];
