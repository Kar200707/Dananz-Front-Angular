import {Component, Input} from '@angular/core';
import {AboutBlock} from "../../models/about";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-about-block',
  templateUrl: './about-block.component.html',
  styleUrls: ['./about-block.component.css'],
  standalone: true,
  imports: [
    RouterModule
  ]
})
export class AboutBlockComponent {
  @Input() isReverce:boolean = false;
  @Input() aboutBlockDate!: AboutBlock;
  protected readonly innerWidth = innerWidth;
}
