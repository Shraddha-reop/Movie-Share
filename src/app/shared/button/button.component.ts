import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sa-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() buttonConfig: any = null;
  ngOnInit(): void {
  }

}
