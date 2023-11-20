import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { ProductDetail } from '../../services/product-detail';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private service: SearchService = inject(SearchService);
  protected productId: string = '';
  protected description: string = '';
  protected productDetails: ProductDetail | undefined = undefined;

  ngOnInit(): void {
    this.getProductId();
  }

  getProductId() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
    this.service.getProductDetails(id).subscribe(productDetails =>{
      this.productDetails = productDetails;
    });
    this.service.getProductDescription(id).subscribe(data => {
      this.description = data.plain_text;
    });

  }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(() => {
  //     console.log(this.route.snapshot.paramMap.get('id'));
  //     this.productId = this.route.snapshot.paramMap.get('id')!;
  //   });
  // }

}
