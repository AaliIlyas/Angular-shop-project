import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product!: IProduct;
  @Input() detailsPage : boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.detailsPage);
  }

  @Output() cardClick: EventEmitter<string> = new EventEmitter<string>();

  redirectToDetails(): void {
    this.router.navigate([`/products/${this.product.id}`]);
  }

  handleCardClick(): void {
    console.log("clicked");
    this.cardClick.emit(this.product.title);
  }
}