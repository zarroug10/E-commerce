import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAward, featherGift, featherShield, featherTruck } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-company-services',
   imports: [NgIcon],
    providers: [provideIcons({featherTruck,
      featherAward,
      featherShield,
      featherGift,
    })],
  templateUrl: './company-services.component.html',
  styleUrl: './company-services.component.css'
})
export class CompanyServicesComponent {

}
