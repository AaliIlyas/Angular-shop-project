import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { IUser } from '../IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private basket: BasketService,
    private userService: UserService) { }

  get basketCount(): number {
    return this.basket.itemsCount;
  }

  get user(): IUser | undefined {

    console.log(this.userService.user);
    return this.userService.user;
  }

  // currentUser : IUser | undefined;

  ngOnInit(): void {
    // this.currentUser = this.user;
  }
}
