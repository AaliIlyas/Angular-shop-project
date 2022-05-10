import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from '../basket.service';
import { IProduct } from '../IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  errorMessage = "";

  basket = false;

  constructor(private route: ActivatedRoute,
    private service: ProductService,
    private basketService: BasketService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.getProduct(parseInt(id!)).subscribe({
      next: p => {
        this.product = p;
      },
      error: err => {
        this.errorMessage = err;
      }
    })
  }

  handleClick(): void {
    this.basketService.AddItem(1);
    this.basket = true;
  }
}
