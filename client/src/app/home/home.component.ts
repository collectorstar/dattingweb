import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  regisgerMode = false;
  users: any;

  constructor() {}
  ngOnInit(): void {}

  registerToggle() {
    this.regisgerMode = !this.regisgerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.regisgerMode = event;
  }
}
