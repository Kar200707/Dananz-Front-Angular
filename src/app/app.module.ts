import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { OurTeamsComponent } from './pages/our-teams/our-teams.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PortfoiliosComponent } from './pages/portfoilios/portfoilios.component';
import { PortfoliosDetailsComponent } from './pages/portfolios-details/portfolios-details.component';
import {RouterModule, Routes} from "@angular/router";
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LayoutComponent } from './layout/layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AboutBlockComponent } from './components/about-block/about-block.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Home'
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About Us'
      },
      {
        path: 'sevices',
        component: ServicesComponent,
        title: 'Sevices'
      },
      {
        path: 'our-teams',
        component: OurTeamsComponent,
        title: 'Our Teams'
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        title: 'Contact Us'
      },
      {
        path: 'portofolios',
        component: PortfoiliosComponent,
        title: 'Portofolios'
      },
      {
        path: 'portofolios-details',
        component: PortfoliosDetailsComponent,
        title: 'Portofolios Details'
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: '404 page not found'
  }
]

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
