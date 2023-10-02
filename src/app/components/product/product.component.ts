import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [
    './product.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    RouterModule
  ],
})
export class ProductComponent {

}
