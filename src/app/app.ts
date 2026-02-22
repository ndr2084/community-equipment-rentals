import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./page/login-page/login";
import { Navigation } from "./common/navigation/navigation";
import { Container } from "./common/container/container";
import { HomePage } from "./page/home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Navigation, Container, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'community-share';
isLoggedIn: boolean = true;
}
