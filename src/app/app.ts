import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from "./page/login-page/login-page";
import { Navigation } from "./common/navigation/navigation";
import { Container } from "./common/container/container";
import { AboutPage } from "./page/about-page/about-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPage, Navigation, Container, AboutPage ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'community-share';
isLoggedIn: boolean = true;
}
