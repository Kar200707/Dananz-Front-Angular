import { Component } from '@angular/core';
import {ProductComponent} from "../../components/product/product.component";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: [
    './services.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    ProductComponent
  ]
})
export class ServicesComponent {

}
