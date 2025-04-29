import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherFacebook, featherInstagram, featherLinkedin, featherStar, featherTwitter, featherYoutube } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-footer',
  imports: [NgIcon],
   providers: [provideIcons({featherFacebook,
     featherLinkedin,
     featherInstagram,
     featherYoutube,
     featherTwitter,
     featherStar,})],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
