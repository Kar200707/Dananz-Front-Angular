import { Component } from '@angular/core';
import {ProductComponent} from "../../components/product/product.component";
import {AboutBlockComponent} from "../../components/about-block/about-block.component";
import {AboutBlock} from "../../models/about";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../styles/image-info.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    ProductComponent,
    AboutBlockComponent,
    RouterModule
  ]
})
export class HomeComponent {
  aboutUsBlockDate: AboutBlock = {
    id: 1,
    userImg: 'assets/images/user-img.png',
    userName: 'Arga Danaan',
    userDescription: 'CEO of Dananz',
    title: '',
    img: 'assets/images/about-img.png',
    description: `
        Online learning with us does not interfere
        with your daily life. because learning can be
        done anytime and anywhere.
      `
  }
}
