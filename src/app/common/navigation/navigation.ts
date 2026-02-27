import { Component, ElementRef, inject, signal } from '@angular/core';
@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {

  mouseInNavBar = signal(false);

  toggle(){
    this.mouseInNavBar.update((mouseInNavBar) => !mouseInNavBar)
  }

  enter_animation = signal('enter-animation');
  exit_animation = signal('exit-animation');
}
