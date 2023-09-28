import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.css',
    '../../styles/media.css'
  ]
})
export class FooterComponent {
  forms: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ])
  });
}
