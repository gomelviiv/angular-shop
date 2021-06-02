import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-social-networks',
  templateUrl: './our-social-networks.component.html',
  styleUrls: ['./our-social-networks.component.scss'],
})
export class OurSocialNetworksComponent implements OnInit {
  heading = 'Мы в социальных сетях';
  paragraph = '#ojjo_jewerly';

  constructor() {}

  ngOnInit(): void {}
}
