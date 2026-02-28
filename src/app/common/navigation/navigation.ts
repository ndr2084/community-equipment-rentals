import { Component, ElementRef, inject, signal } from '@angular/core';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {

  mouseInNavBar = signal(false);

  toggle(){
    this.mouseInNavBar.update((mouseInNavBar) => !mouseInNavBar)
  }
}
