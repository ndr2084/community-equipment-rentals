import { Component, ElementRef, inject, signal } from '@angular/core';
import {RouterLink} from '@angular/router';
import { Container } from "../container/container";
import { Card } from "../card/card";
@Component({
  selector: 'app-navigation',
  imports: [RouterLink, Container, Card],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {

}
