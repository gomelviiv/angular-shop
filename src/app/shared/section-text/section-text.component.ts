import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-text',
  templateUrl: './section-text.component.html',
  styleUrls: ['./section-text.component.scss'],
})
export class SectionTextComponent implements OnInit {
  @Input() heading: string | undefined;
  @Input() paragraph: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
