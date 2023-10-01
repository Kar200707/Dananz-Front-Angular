import { Component } from '@angular/core';
import {ServicesBlockComponent} from "../../components/services-block/services-block.component";
import {AboutBlockComponent} from "../../components/about-block/about-block.component";
import {AboutBlock} from "../../models/about";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-portfoilios',
  templateUrl: './portfoilios.component.html',
  styleUrls: [
    './portfoilios.component.css',
    '../../styles/image-info.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    ServicesBlockComponent,
    AboutBlockComponent,
    NgForOf
  ]
})
export class PortfoiliosComponent {
  aboutUsBlockDate: AboutBlock[] = [
    {
      id: 1,
      userImg: 'assets/images/user-img.png',
      userName: 'Arga Danaan',
      userDescription: 'CEO of Dananz',
      title: 'Minimalist Room',
      img: 'assets/images/about-img.png',
      description: `
        Online learning with us does not interfere
        with your daily life. because learning can be
        done anytime and anywhere.
      `
    },
    {
      id: 2,
      userImg: 'assets/images/user-img.png',
      userName: 'Arga Danaan',
      userDescription: 'CEO of Dananz',
      title: 'Vintage Room',
      img: 'assets/images/img2-portfolio.png',
      description: `
        Online learning with us does not interfere
        with your daily life. because learning can be
        done anytime and anywhere.
      `
    },
    {
      id: 3,
      userImg: 'assets/images/user-img.png',
      userName: 'Arga Danaan',
      userDescription: 'CEO of Dananz',
      title: 'Modern Room',
      img: 'assets/images/img3-portfolio.png',
      description: `
        Online learning with us does not interfere
        with your daily life. because learning can be
        done anytime and anywhere.
      `
    },
    {
      id: 3,
      userImg: 'assets/images/user-img.png',
      userName: 'Arga Danaan',
      userDescription: 'CEO of Dananz',
      title: 'transitional Room',
      img: 'assets/images/img4-portfolio.png',
      description: `
        Online learning with us does not interfere
        with your daily life. because learning can be
        done anytime and anywhere.
      `
    },
  ]
}
