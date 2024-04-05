import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  filterWord: string = '';

  constructor() {}

  ngOnInit(): void {}
  onInputChange(event: any) {
    this.filterWord = event.target.value;
  }
}
