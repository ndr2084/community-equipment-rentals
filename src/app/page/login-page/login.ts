import { Component } from '@angular/core';
import { Navigation } from "../../common/navigation/navigation";
import { Container } from "../../common/container/container";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [Container, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    discordUsername: new FormControl(''),
  });

}
