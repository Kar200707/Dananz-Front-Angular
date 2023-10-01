import { Component } from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
  ]
})
export class LayoutComponent {

}
