import { Component } from '@angular/core';
import {ServicesBlockComponent} from "../../components/services-block/services-block.component";
import {UserInfo} from "../../models/user-info";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-our-teams',
  templateUrl: './our-teams.component.html',
  styleUrls: [
    './our-teams.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    ServicesBlockComponent,
    NgForOf,
    NgIf
  ]
})
export class OurTeamsComponent {
  userInfoData: UserInfo[] = [
    {
      id: 1,
      userImg: 'assets/images/user1-our-teams.png',
      userName: 'Shoo Phar Dhie',
      userBio: 'CEO',
    },
    {
      id: 1,
      userImg: 'assets/images/user2-our-teams.png',
      userName: 'Shoo Phar Dhie',
      userBio: 'CEO',
    },
    {
      id: 1,
      userImg: 'assets/images/user3-our-teams.png',
      userName: 'Shoo Phar Dhie',
      userBio: 'CEO',
    },
    {
      id: 1,
      userImg: 'assets/images/user4-our-teams.png',
      userName: 'Shoo Phar Dhie',
      userBio: 'CEO',
    },
    {
      id: 1,
      userImg: 'assets/images/user5-our-teams.png',
      userName: 'Shoo Phar Dhie',
      userBio: 'CEO',
    },
    {
      id: 1,
      userImg: 'assets/images/user6-our-teams.png',
      userName: 'Shoo Phar Dhie',
      userBio: 'CEO',
    },
    {
      id: 1,
      userImg: 'assets/images/user7-our-teams.png',
      userName: 'Shoo Phar Dhie',
      userBio: 'CEO',
    },
    {
      id: 1,
      userImg: 'assets/images/user8-our-teams.png',
      userName: 'Shoo Phar Dhie',
      userBio: 'CEO',
    }
  ]
}
