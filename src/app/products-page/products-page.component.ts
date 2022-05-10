import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  subscription!: Subscription;
  errorMessage = '';
  serverError = false;
  categories: string[] = [];
  cardClickedTitle = "";

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.filterProducts(value);
  }

  createCategories(): string[] {
    let set = new Set(this.products.map((p : IProduct) => p.category));
    return [... set];
  }

  setClickedCategory(event: EventTarget | null) {
    let node = event as HTMLElement;
    let text = node.innerHTML;

    this.listFilter = text;
  }

  handleCardClick(message: string): void {
    this.cardClickedTitle = "Product clicked: " + message;
  }

  constructor(protected productService: ProductService) { }

  filterProducts(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((p: IProduct) =>
    p.title.toLocaleLowerCase().includes(filterBy) ||
    p.category.toLocaleLowerCase().includes(filterBy)
    );
  }

  ngOnInit(): void {
    this.subscription = this.productService.getAllProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
        this.categories = this.createCategories();
      },
      error: err => {
        this.errorMessage = err;
        this.serverError = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}