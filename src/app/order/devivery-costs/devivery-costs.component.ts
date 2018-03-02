import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-devivery-costs',
  templateUrl: './devivery-costs.component.html'
})
export class DeviveryCostsComponent implements OnInit {

  @Input() delivery: number;
  @Input() itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  total():number{
    return this.delivery + this.itemsValue;
  }

}
