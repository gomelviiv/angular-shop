import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-salons',
  templateUrl: './our-salons.component.html',
  styleUrls: ['./our-salons.component.scss'],
})
export class OurSalonsComponent implements OnInit {
  heading = 'Посетите наши салоны в Москве';
  paragraph = 'Не знаете, что выбрать?';
  constructor() {}

  ngOnInit(): void {}
}
