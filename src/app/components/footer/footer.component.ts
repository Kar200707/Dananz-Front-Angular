import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule
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
