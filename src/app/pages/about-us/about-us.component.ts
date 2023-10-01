import { Component } from '@angular/core';
import {ServicesBlockComponent} from "../../components/services-block/services-block.component";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: [
    './about-us.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    ServicesBlockComponent
  ]
})
export class AboutUsComponent {

}
