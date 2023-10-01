import { Component } from '@angular/core';
import {ServicesBlockComponent} from "../../components/services-block/services-block.component";

@Component({
  selector: 'app-our-teams',
  templateUrl: './our-teams.component.html',
  styleUrls: [
    './our-teams.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    ServicesBlockComponent
  ]
})
export class OurTeamsComponent {

}
