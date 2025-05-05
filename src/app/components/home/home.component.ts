import { Component } from '@angular/core';
import { featherFacebook, featherInstagram, featherLinkedin, featherShoppingCart, featherStar, featherTwitter, featherYoutube } from '@ng-icons/feather-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { CompanyServicesComponent } from '../company-services/company-services.component';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
 imports: [NgIcon, CompanyServicesComponent,RouterLink,NgFor,NgClass],
   providers: [provideIcons({featherFacebook,
     featherLinkedin,
     featherInstagram,
     featherYoutube,
     featherTwitter,
     featherShoppingCart,
     featherStar,})],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 reviews = [
  {
    title: 'Great Tool!',
    content: 'This tool has made my farming tasks so much easier. Highly recommend!',
    rating: 5,
    author: 'John Doe'
  },
  {
    title: 'Good Quality',
    content: 'The quality of the tools is excellent. Will definitely buy again.',
    rating: 4,
    author: 'Jane Smith'
  },
  {
    title: 'Affordable and Reliable',
    content: 'Affordable prices and reliable tools. Very satisfied with my purchase.',
    rating: 5,
    author: 'Ahmed Ali'
  },
  {
    title: 'Decent Experience',
    content: 'The tools are good, but delivery took longer than expected.',
    rating: 3,
    author: 'Emily Johnson'
  }
];
}
