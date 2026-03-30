import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Container } from "../../common/container/container";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToggleService } from '../../service/toggle';

@Component({
  selector: 'app-login-page',
  imports: [Container, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  buttonMap = new Map<string, string>([
    ["Get Started Button", "Get Started"],
    ["Sign In Button", "Sign In"]
  ]);

  loginSignal = signal<string | null>(null);
  toggleServie = inject(ToggleService);

  toggle(currentString: string | null, signalArgument: WritableSignal<string | null>) {
    this.toggleServie.toggle(currentString, signalArgument);
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    discordUsername: new FormControl(''),
  });

}
