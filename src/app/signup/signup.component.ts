import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  signupForm = this.formBuilder.group({
    name: "",
    username: "",
    password: "",
    reenterPassword: "",
    about: ""
  } as IUser);

  onSubmit(): void {
    let value = this.signupForm.value;

    this.userService.user = value;
    this.router.navigate(['/home']);
    console.log(value);
  }

  ngOnInit(): void {
  }

}
